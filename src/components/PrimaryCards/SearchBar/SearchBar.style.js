import { StyleSheet } from 'react-native'

const baseStyle = {
    search_bar_container: {
        marginTop: 36,
    },
}

export default StyleSheet.create({
    light:{
        ...baseStyle,
    },
    dark:{
        ...baseStyle,
    }
})