import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    light:{
        container:{
            flex:1,
            width:Dimensions.get('screen').width/4,
            marginHorizontal: 3,
            marginVertical: 4,
        },
        top_container:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF1F',
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            marginBottom:4
        },
        mid_container:{
            flex:3,
            backgroundColor: '#FFFFFF1F',
            marginTop:4,
            marginBottom:4,
        },
        bottom_container:{
            flex:1,
            backgroundColor: '#FFFFFF1F',
            marginTop: 4,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        day_name_text:{
            fontWeight: 'bold',
            color:'white',
            fontSize:17
        },
        degree_text:{
            fontWeight:'bold',
            color:'white',
            fontSize:14
        },
    },
    dark:{

    }
})