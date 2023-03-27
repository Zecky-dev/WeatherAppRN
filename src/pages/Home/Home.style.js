import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    light: {
        container: {
            flex: 1,
            backgroundColor: '#18dcff',
        },
        top_container: {
            flexDirection: 'row',
            flex: 1.5,
            marginVertical: 16,
            marginHorizontal: 12,
        },
        animation_container: {
            flex: 0.82
        },
        other_daily_container: {
            flex: 0.25,
            backgroundColor: '#FFFFFF1F',
            borderRadius: 4,
        },
        /* Bottom */
        bottom_container: {
            flex: 1,
            margin: 8,
            borderRadius: 8,
            backgroundColor: '#FFFFFF1F',
        },
        search_bar_container: {
            marginTop: 36,
        },
    },

    dark: {

    }

})