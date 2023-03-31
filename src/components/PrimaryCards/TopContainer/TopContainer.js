import React from 'react'
import { View,FlatList } from 'react-native'
import Animation from '../../../assets/animations/Animation/Animation'
import HourlyInfoCard from '../../SecondaryCards/HourlyInfoCard'
import getWeatherInfo from '../../../Functions/getWeatherInfo'
import styles from './TopContainer.style'

const TopContainer = ({ data, theme }) => {
    let time = new Date()

    if(time.getMinutes >= 30)
        time = time.getHours()+1
    else
        time = time.getHours();

    return (
        <View style={styles[theme].top_container}>
            <View style={styles[theme].animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={getWeatherInfo(data, 'current',time).animation} />
            </View>
            <View style={styles[theme].other_daily_container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={getWeatherInfo(data, 'daily')}
                    renderItem={({ item }) => <HourlyInfoCard weather={item} theme={theme} />}
                />
            </View>
        </View>
    )
}

export default TopContainer;