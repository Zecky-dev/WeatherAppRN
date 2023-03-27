import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        light: {
            flex: 1,
            backgroundColor: '#8395a7',
        },
    },
    top_container: {
        light: {
            flexDirection: 'row',
            flex: 2,
            marginVertical: 16,
            marginHorizontal: 12,
        },
    },
    animation_container: {
        light: {
            flex: 1
        }
    },
    other_daily_container: {
        light: {
            flex: 0.25,
            backgroundColor: '#303030',
            borderRadius: 4,
        }
    },

    /* Mid */
    mid_container: {
        light: {
            flex:1,
            flexDirection: 'row',
        },
    },

    /* Mid Left */

    mid_left: {
        light: {
            flex:0.5,
            backgroundColor: '#303030',
            margin: 8,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
        }
    },

    degree: {
        light: {
            color: 'white',
            fontSize: 36,
        }
    },


    /* Mid Right */

    mid_right: {
        light: {
            flex: 1,
            flexDirection: 'column',
            margin: 8,
            borderRadius: 8,
        }
    },

    /* Mid right inner top */
    mid_right_inner_top: {
        light: {
            flex: 1,
            backgroundColor: '#16a085',
            borderTopStartRadius: 4,
            borderTopEndRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    city: {
        light: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
        }
    },

    weather_status: {
        light: {
            color:'white',
            fontSize: 32,
        }
    },

    mid_right_inner_bottom: {
        light: {
            flex: 2,
            backgroundColor: '#303030',
            borderBottomStartRadius: 4,
            borderBottomEndRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
        }
    },




    /* Bottom */
    bottom_container: {
        light: {
            flex:1,
            backgroundColor: '#303030',
            margin: 8,
            borderRadius: 8,
        },
    },
    search_bar_container:{
        light: {
            marginTop:8,
        },  
    },
})