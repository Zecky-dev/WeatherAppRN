import { StyleSheet } from 'react-native'

const baseStyle = {
    top_container: {
        flexDirection: 'row',
        flex: 2,
        marginVertical: 16,
        marginHorizontal: 12,
    },
    top_container_2: {
        flex: 2,
        marginVertical: 16,
        marginHorizontal: 12,
    },
    animation_container: {
        flex: 0.75,
        //height:Dimensions.get('screen').height/2.4,
        //width:Dimensions.get('screen').width/1.45,
    },
    other_daily_container: {
        flex:0.25,
        backgroundColor: '#FFFFFF1F',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
}

export default StyleSheet.create({
    light: {
        ...baseStyle
    },
    dark: {
        ...baseStyle
    }
})