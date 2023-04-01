import React from 'react'
import { Text,View } from 'react-native'
import Animation from '../../../assets/animations/Animation/Animation'
import styles from './DailyInfoCard.style'
import moment from 'moment'


export default function({weather,theme}){
    const style = styles[theme]
    function getDayName(dateStr, locale) {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }
    var dayName = moment(weather[12].time.substring(0,10)).format('dddd')
    let avarageTemperature
    let temperatureSum = 0
    for(i=0;i<weather.length;i++) {
        temperatureSum+=weather[i].degree
    }
    avarageTemperature = Math.round(temperatureSum / weather.length)
    return(
        <View style={style.container}>
            <View style={style.top_container}>
                <Text style={style.day_name_text}>{dayName}</Text>
            </View>
            <View style={style.mid_container}>
                <Animation source={weather[12].animation}/>
            </View>
            <View style={style.bottom_container}>          
                <Text style={style.degree_text}>{avarageTemperature} °C </Text>
            </View>
        </View>
    )
}