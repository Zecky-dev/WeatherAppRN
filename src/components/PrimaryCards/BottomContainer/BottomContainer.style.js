import { StyleSheet } from 'react-native'

const baseStyle = {
    bottom_container: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        
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