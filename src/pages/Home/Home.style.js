import { StyleSheet,Dimensions } from 'react-native'

const baseStyle = {
    container: {
        flex: 1,
    },
    /* Bottom */
}

export default StyleSheet.create({

    light: {
        ...baseStyle
    },

    dark: {
        ...baseStyle
    }

})