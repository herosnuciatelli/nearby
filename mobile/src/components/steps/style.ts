import { StyleSheet } from "react-native";
import * as theme from '@/styles/theme'

export const s = StyleSheet.create({
    container: {
        gap: 24,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.gray[500]
    }
})