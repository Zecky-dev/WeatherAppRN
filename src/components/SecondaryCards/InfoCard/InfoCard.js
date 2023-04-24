import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { Context } from '../../../context/Context'
import styles from './InfoCard.style'
import moment from 'moment'
import 'moment/locale/tr'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ({ theme, weather, location }) {
    let hour = moment().format('LT')
    const style = styles[theme]
    const degreeCelcius = Math.round(parseFloat(weather.degree))
    const degreeFahrenheit = Math.round((degreeCelcius * 9/5) + 32);
    const windspeedKmSa = Math.round(parseFloat(weather.windspeed))
    const windspeedMPH = Math.round(windspeedKmSa / 1.609); 

    const {units} = useContext(Context);
    const {tempUnit,velocityUnit} = JSON.parse(units);

    return (
        <View style={style.mid_container}>
            <View style={style.mid_container_top}>
                <Text style={style.city}>{location} - {hour}</Text>
            </View>
            <View style={style.mid_container_bottom}>
                <View style={style.mid_container_bottom_left}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name="thermometer" size={32} color="white"/>
                        <Text style={style.degree}>
                            {
                                tempUnit === "°C" ? `${degreeCelcius} °C` : `${degreeFahrenheit} °F` 
                            }
                        </Text>
                    </View>
                    
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <Icon name="weather-windy" size={32} color="white"/>
                        <Text style={style.degree}>
                            {
                                tempUnit === "°C" ? `${windspeedKmSa} km/sa` : `${windspeedMPH} mph` 
                            }
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