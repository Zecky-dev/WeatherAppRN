import React from 'react'
import { Text,View } from 'react-native'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import styles from './HourlyInfoCard.style'

const style = styles['light'];

export default function(){
    return(
        <View style={style.container}>
            <View style={style.top_container}>
                <Animation source={Anims.cloudy}/>
            </View>
            <View style={style.bottom_container}>
                <Text style={style.hour_text}>00.00</Text>
            </View>
        </View>
    )
}