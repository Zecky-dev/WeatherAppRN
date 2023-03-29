import React from 'react'
import { Text,View } from 'react-native'
import styles from './InfoCard.style'
import moment from 'moment'
import 'moment/locale/tr'

export default function({theme,weather}) {
    let hour = moment().format('LT')
    
    const style = styles[theme]
    const degree = Math.round(parseFloat(weather.degree)).toString()
    return(
        <View style={style.mid_container}>
            <View style={style.mid_left}>
                <Text style={style.degree}>
                    {degree} °C
                </Text>
            </View>
            <View style={style.mid_right}>
                <View style={style.mid_right_inner_top}>
                    <Text style={style.city}>Istanbul - {hour}</Text>
                </View>
                <View style={style.mid_right_inner_bottom}>
                    <Text style={style.weather_status}>
                        {weather.status}
                    </Text>
                </View>
            </View>
        </View>
    )
}