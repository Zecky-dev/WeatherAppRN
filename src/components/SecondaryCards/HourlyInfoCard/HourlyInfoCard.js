import React from 'react'
import { Text,View } from 'react-native'
import Animation from '../../../assets/animations/Animation/Animation'
import styles from './HourlyInfoCard.style'

export default function({weather,theme}){
    const style = styles[theme]
    const {animation,time} = weather;
    const formattedTime = time.substring(time.length - 5,time.length)

    return(
        <View style={style.container}>
            <View style={style.top_container}>
                <Animation source={animation} style={{width:120,height:120}}/>
            </View>
            <View style={style.bottom_container}>
                <Text style={style.hour_text}>{formattedTime}</Text>
            </View>
        </View>
    )
}