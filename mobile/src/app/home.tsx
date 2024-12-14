import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from 'expo-location'
import { colors, fontFamily } from '@/styles/theme'

import { api } from "@/services/api";

import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";
import { router } from "expo-router";

type MarketsProps = PlaceProps & {
    latitude: number
    longitude: number
}

// standart location - Av. Paulista, São Paulo
const standartLocation = {
    latitude: -23.561187293883442,
    longitude: -46.656451388116494,
}

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    const [markets, setMarkets] = useState<MarketsProps[]>([])
    const [currentLocation, setCurrentLocation] = useState<Pick<MarketsProps, 'latitude' | 'longitude'> | null>(standartLocation)

    async function getCategories() {
        try {
            const { data } = await api.get('/categories')
            setCategories(data)
            setCategory(data[0].id)
        } catch (error: any) {
            console.log(error)
            Alert.alert("Categorias", "Não foi possível carregar as categorias.")
        }
    }

    async function getMarkets() {
        try {
            if (!category) { return }

            const { data } = await api.get('/markets/category/' + category)

            data && setMarkets(data)
        } catch (error) {
            console.log(error)
            Alert.alert('Locais', 'Não foi possível carregar os locais.')
        }
    }

    // async function getCurrentLocation() {
    //     try {
    //         const { granted } = await Location.requestForegroundPermissionsAsync()

    //         if (granted) {
    //             let location = await Location.getCurrentPositionAsync()
    //             setCurrentLocation({
    //                 latitude: location.coords.latitude,
    //                 longitude: location.coords.longitude
    //             })
    //         }
    //     } catch (error) {

    //     }
    // }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getMarkets()
    }, [category])

    // useEffect(() => {
    //     getCurrentLocation()
    // }, [currentLocation])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#CECECE'
        }}>
            <Categories
                data={categories}
                onSelected={setCategory}
                selected={category}
            />

            {currentLocation && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                >
                    <Marker
                        identifier="current"
                        coordinate={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude
                        }}
                        image={require("@/assets/location.png")}
                    />

                    {
                        markets.map((item) => {
                            return (
                                <Marker
                                    key={item.id}
                                    identifier={item.id}
                                    coordinate={{
                                        latitude: item.latitude,
                                        longitude: item.longitude
                                    }}
                                    image={require("@/assets/pin.png")}
                                >
                                    <Callout
                                        onPress={() => router.navigate({ pathname: `./market/${item.id}` })}
                                    >
                                        <View>
                                            <Text style={{
                                                fontSize: 14,
                                                color: colors.gray[600],
                                                fontFamily: fontFamily.medium
                                            }}>{item.name}</Text>
                                            <Text style={{
                                                fontSize: 14,
                                                color: colors.gray[600],
                                                fontFamily: fontFamily.regular
                                            }}>{item.address}</Text>
                                        </View>
                                    </Callout>
                                </Marker>
                            )
                        })
                    }

                </MapView>
            )}

            <Places data={markets} />
        </View>
    )
}