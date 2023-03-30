import { StyleSheet } from 'react-native'

const baseStyle = {
        textInput: {
            borderBottomWidth: 0.8,
            borderBottomColor: 'gray',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }
}

export default StyleSheet.create({
    light:{
        ...baseStyle,
    },
    dark:{
        ...baseStyle,
    }
})