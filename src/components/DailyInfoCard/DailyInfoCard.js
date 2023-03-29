import React from 'react'
import { Text,View } from 'react-native'
import Animation from '../../assets/animations/Animation'
import styles from './DailyInfoCard.style'
import moment from 'moment'

export default function({weather,theme}){
    function getDayName(dateStr, locale) {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }
    var dayName = moment(weather[12].time.substring(0,10)).format('dddd')
    const style = styles[theme]
    
    return(
        <View style={style.container}>
            <View style={style.top_container}>
                <Text style={style.day_name_text}>{dayName}</Text>
            </View>
            <View style={style.mid_container}>
                <Animation source={weather[12].animation}/>
            </View>
            <View style={style.bottom_container}>
                <Text style={style.degree_text}>{Math.round(parseFloat(weather[12].degree)).toString()} °C</Text>
            </View>
        </View>
    )
}