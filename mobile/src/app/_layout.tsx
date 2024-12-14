import { Stack } from "expo-router"
import * as theme from "@/styles/theme"
import { Loading } from "@/components/loading"

import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold
} from '@expo-google-fonts/rubik'
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: theme.colors.gray[100] }
                }}
            />
        </GestureHandlerRootView>
    )
}