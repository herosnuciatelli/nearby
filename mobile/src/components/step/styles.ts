import { StyleSheet } from "react-native";
import * as theme from '@/styles/theme'

export const s = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        gap: 16,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontFamily: theme.fontFamily.semiBold,
        color: theme.colors.gray[600]
    },
    description: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.gray[500],
        marginTop: 4
    }
})