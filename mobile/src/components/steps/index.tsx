import { View, Text, Alert } from 'react-native'

import { s } from './style'
import { Step } from '../step'

import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'

const stepsContent = [
    {
        title: 'Encontre estabelecimentos',
        description: 'Veja locais perto de você que são parceiros Nearby',
        icon: IconMapPin,
    },
    {
        title: 'Ative o cupom com QR Code',
        description: 'Escaneie o código no estabelecimento para usar o benefício',
        icon: IconQrcode
    },
    {
        title: 'Garanta vantagens perto de você',
        description: 'Ative cupons onde estiver, em diferentes tipos de estabelecimentos',
        icon: IconTicket
    }
]
export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como Funciona!</Text>
            {stepsContent.map((stepContent, i) => (
                <Step
                    key={i}
                    title={stepContent.title}
                    description={stepContent.description}
                    icon={stepContent.icon}
                />
            ))}

        </View>
    )
}