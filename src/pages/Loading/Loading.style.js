import { StyleSheet } from 'react-native'

const baseStyle = {
    container: {
        flex: 1,
    },
    loading_container: { 
        position: 'absolute', 
        top: '60%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%' 
    },
    loading_text: {
        color: 'white', 
        fontSize: 36
    }
}

export default StyleSheet.create({
    light: {
        ...baseStyle,
    },
    dark: {
        ...baseStyle,
    }
})