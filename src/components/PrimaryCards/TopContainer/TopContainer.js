import React, { useEffect } from 'react'
import { View,FlatList } from 'react-native'
import Animation from '../../../assets/animations/Animation/Animation'
import HourlyInfoCard from '../../SecondaryCards/HourlyInfoCard'
import getWeatherInfo from '../../../Functions/getWeatherInfo'
import styles from './TopContainer.style'

const TopContainer = ({ data, theme }) => {

    const getTime = () => {
        let date = new Date()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        if(minutes >= 30) {
            return hour + 1;
        }
        else {
            return hour;
        }
    }

    useEffect(() => getTime(),[])

    return (
        <View style={styles[theme].top_container}>
            <View style={styles[theme].animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={getWeatherInfo(data, 'current',getTime()).animation} />
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