import { StyleSheet } from 'react-native'

const baseStyle = {
    container:{
        flex:1
    }
}

export default StyleSheet.create({
    light:{
        ...baseStyle
    },
    dark: {
        ...baseStyle
    }
})