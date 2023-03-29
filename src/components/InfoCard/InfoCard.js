import React from 'react'
import { Text,View } from 'react-native'
import styles from './InfoCard.style'

export default function({theme}) {
    const style = styles[theme]
    return(
        <View style={style.mid_container}>
            <View style={style.mid_left}>
                <Text style={style.degree}>
                    7 °C
                </Text>
            </View>
            <View style={style.mid_right}>
                <View style={style.mid_right_inner_top}>
                    <Text style={style.city}>Istanbul - Yerel Saat</Text>
                </View>
                <View style={style.mid_right_inner_bottom}>
                    <Text style={style.weather_status}>
                        Yağışlı
                    </Text>
                </View>
            </View>
        </View>
    )
}