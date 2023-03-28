import { StyleSheet,Dimensions } from 'react-native'

export default StyleSheet.create({
    light:{
        container:{
            backgroundColor:'transparent',
        },
        top_container:{
            backgroundColor:'transparent',
            height:Dimensions.get('screen').height/6,
            width:Dimensions.get('screen').width/4,
        },
        bottom_container:{
            backgroundColor:'transparent',
            justifyContent: 'center',
            alignItems: 'center',
        },
        hour_text:{
            fontWeight: 'bold',
            color:'white',
            fontSize:17
        },
    },
    dark:{

    }
})