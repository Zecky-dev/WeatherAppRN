import { StyleSheet } from 'react-native'

const baseStyle = {
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 32,
        padding:8,
        marginTop:42,
        marginHorizontal:8,
        borderRadius:8
    },
    left_container: {
    },
    right_container: {
        flex:1
    },
    text:{
        fontWeight: 'bold',
        fontSize:16,
    }
}

export default StyleSheet.create({
    light:{
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:'white'
        },
        text:{
            ...baseStyle.text,
            color:'black'
        }
    },
    dark: {
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:'black'
        },
        text: {
            ...baseStyle.text,
            color:'white'
        }
    }
})