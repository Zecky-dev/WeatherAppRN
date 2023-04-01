import React from 'react'
import { Text, View } from 'react-native'
import styles from './InfoCard.style'

export default function ({ theme, weather, location }) {
    const style = styles[theme]
    const degree = Math.round(parseFloat(weather.degree)).toString()

    return (
        <View style={style.mid_container}>
            <View style={style.mid_container_top}>
                <Text style={style.city}>{location}</Text>
            </View>
            <View style={style.mid_container_bottom}>
                <View style={style.mid_container_bottom_left}>
                    <Text style={style.degree}>
                        {degree} °C
                    </Text>
                </View>
                <View style={style.mid_container_bottom_right}>
                    <Text style={style.weather_status}>
                        {weather.status}
                    </Text>
                </View>
            </View>
        </View>
    )
}