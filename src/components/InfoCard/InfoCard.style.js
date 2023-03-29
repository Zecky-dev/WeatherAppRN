import { StyleSheet } from 'react-native'

const baseStyle = {
     /* Mid */
     mid_container: {
        flex: 0.85,
        flexDirection: 'row',
    },

    /* Mid Left */

    mid_left: {
        flex: 0.5,
        backgroundColor: '#FFFFFF1F',
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
        backgroundColor: 'purple',
        borderTopStartRadius: 4,
        borderTopEndRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    city: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    weather_status: {
        color: 'white',
        fontSize: 32,
    },

    mid_right_inner_bottom: {
        flex: 2,
        backgroundColor: '#FFFFFF1F',
        borderBottomStartRadius: 4,
        borderBottomEndRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default StyleSheet.create({
    light:{
        ...baseStyle
    },
    dark:{
        ...baseStyle
    }
})