import { View } from 'react-native'
import { router } from 'expo-router'

import { Welcome } from '@/components/welcome'
import { Steps } from '@/components/steps'
import { Button } from '@/components/button'
import { StatusBar } from 'expo-status-bar'

const Index = () => {
    return (
        <View style={{
            flex: 1,
            padding: 40,
            gap: 40,
        }}>
            <Welcome />
            <Steps />
            <Button onPress={() => router.replace('/home')}>
                <Button.Title>Começar</Button.Title>
            </Button>
            <StatusBar style='dark' />
        </View>
    )
}

export default Index