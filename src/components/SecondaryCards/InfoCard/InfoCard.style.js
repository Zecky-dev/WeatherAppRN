import { StyleSheet } from 'react-native'

const baseStyle = {
     /* Mid */
     mid_container: {
        flex: 1,
    },

    degree: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    weather_status: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    
    city: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mid_container_top:{
        flex:0,
        height:'auto',
        backgroundColor: '#DA00FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        padding:8,
    },
    
    mid_container_bottom:{
        flex:1,
        flexDirection: 'row',
    },

    mid_container_bottom_left:{
        flex: 0.5,
        backgroundColor: '#FFFFFF1F',
        marginHorizontal: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mid_container_bottom_right: {
        flex: 0.5,
        backgroundColor: '#FFFFFF1F',
        marginHorizontal: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
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