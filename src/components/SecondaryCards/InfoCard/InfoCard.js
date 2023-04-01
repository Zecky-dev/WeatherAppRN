import React from 'react'
import { Text, View } from 'react-native'
import styles from './InfoCard.style'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ({ theme, weather, location }) {
    const style = styles[theme]
    const degree = Math.round(parseFloat(weather.degree))
    const windspeed = Math.round(parseFloat(weather.windspeed))

    return (
        <View style={style.mid_container}>
            <View style={style.mid_container_top}>
                <Text style={style.city}>{location}</Text>
            </View>
            <View style={style.mid_container_bottom}>
                <View style={style.mid_container_bottom_left}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name="thermometer" size={32} color="white"/>
                        <Text style={style.degree}>
                            {degree} °C
                        </Text>
                    </View>
                    
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name="weather-windy" size={32} color="white"/>
                        <Text style={style.degree}>
                            {windspeed} km/sa
                        </Text>
                    </View>

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