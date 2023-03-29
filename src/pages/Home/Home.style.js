import { StyleSheet,Dimensions } from 'react-native'

const baseStyle = {
    container: {
        flex: 1,
    },
    top_container: {
        flexDirection: 'row',
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
    },
    /* Bottom */
    bottom_container: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        
    },
    search_bar_container: {
        marginTop: 36,
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