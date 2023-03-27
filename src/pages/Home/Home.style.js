import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    light: {
        container: {
            flex: 1,
            backgroundColor: '#8395a7',
        },
        top_container: {
            flexDirection: 'row',
            flex: 2,
            marginVertical: 16,
            marginHorizontal: 12,
        },
        animation_container: {
            flex: 1
        },
        other_daily_container: {
            flex: 0.25,
            backgroundColor: '#303030',
            borderRadius: 4,
        },

        /* Mid */
        mid_container: {
            flex: 1,
            flexDirection: 'row',
        },

        /* Mid Left */

        mid_left: {
            flex: 0.5,
            backgroundColor: '#303030',
            margin: 8,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        },

        degree: {
            color: 'white',
            fontSize: 36,
        },


        /* Mid Right */

        mid_right: {
            flex: 1,
            flexDirection: 'column',
            margin: 8,
            borderRadius: 8,
        },

        /* Mid right inner top */
        mid_right_inner_top: {
            flex: 1,
            backgroundColor: '#16a085',
            borderTopStartRadius: 4,
            borderTopEndRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },

        city: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
        }
        ,

        weather_status: {
            color: 'white',
            fontSize: 32,
        },

        mid_right_inner_bottom: {
            flex: 2,
            backgroundColor: '#303030',
            borderBottomStartRadius: 4,
            borderBottomEndRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },

        /* Bottom */
        bottom_container: {
            flex: 1,
            backgroundColor: '#303030',
            margin: 8,
            borderRadius: 8,
        },
        search_bar_container: {
            marginTop: 8,
        },
    },

    dark: {

    }

})