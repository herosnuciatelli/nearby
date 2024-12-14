import { StyleSheet } from "react-native";
import * as theme from "@/styles/theme";

export const s = StyleSheet.create({
    logo: {
        width: 48,
        height: 48,
        marginTop: 24,
        marginBottom: 28
    },
    title: {
        fontSize: 24,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.gray[600]
    },
    subtitle: {
        fontSize: 14,
        fontFamily: theme.fontFamily.regular,
        color: theme.colors.gray[500],
        marginTop: 12
    }
})