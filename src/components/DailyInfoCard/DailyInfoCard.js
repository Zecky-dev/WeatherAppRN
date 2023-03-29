import React from 'react'
import { Text,View } from 'react-native'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import styles from './DailyInfoCard.style'

const style = styles['light']

export default function({data}){
    return(
        <View style={style.container}>
            <View style={style.top_container}>
                <Text style={style.day_name_text}>Pazartesi</Text>
            </View>
            <View style={style.mid_container}>
                <Animation source={Anims.foggy}/>
            </View>
            <View style={style.bottom_container}>
                <Text style={style.degree_text}>27 °C</Text>
            </View>
        </View>
    )
}