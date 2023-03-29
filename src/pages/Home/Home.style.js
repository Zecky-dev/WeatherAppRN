import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({

    light: {
        container: {
            flex: 1,
            backgroundColor: '#18dcff',
        },
        top_container: {
            flexDirection: 'row',
            flex: 2,
            marginVertical: 16,
            marginHorizontal: 12,
        },
        animation_container: {
            height:Dimensions.get('screen').height/2.4,
            width:Dimensions.get('screen').width/1.45,
        },
        other_daily_container: {
            height:Dimensions.get('screen').height/2.5,
            backgroundColor: '#FFFFFF1F',
            borderRadius: 4,
        },
        /* Bottom */
        bottom_container: {
            flex: 0.5,
            margin: 8,
            borderRadius: 8,
        },
        search_bar_container: {
            marginTop: 36,
        },
    },

    dark: {

    }

})