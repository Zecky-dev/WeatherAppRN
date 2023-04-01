import { StyleSheet } from 'react-native'

const baseStyle = {
     /* Mid */
     mid_container: {
        flex: 1,
    },

    degree: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        marginLeft: 4,
    },

    weather_status: {
        color: 'white',
        fontSize: 32,
        fontWeight: '300'
    },
    
    city: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
    },
    mid_container_top:{
        flex:0,
        height:'auto',
        backgroundColor: '#FFFFFF1F',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        marginBottom: 8,
        padding:8,
    },
    
    mid_container_bottom:{
        flex:1,
        flexDirection: 'row',
    },

    mid_container_bottom_left:{
        flex: 1,
        backgroundColor: '#FFFFFF1F',
        marginLeft: 8,
        marginRight: 4,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mid_container_bottom_right: {
        flex: 0,
        minWidth: 150,
        width: 'auto',
        padding: 8,
        backgroundColor: '#FFFFFF1F',
        marginLeft: 4,
        marginRight: 8,
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