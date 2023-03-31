import React from 'react'
import { View,FlatList } from 'react-native'
import styles from './BottomContainer.style'
import getWeatherInfo from '../../../Functions/getWeatherInfo'
import DailyInfoCard from '../../SecondaryCards/DailyInfoCard'

const BottomContainer = ({ data, theme }) => {
    getWeatherInfo(data, 'weekly')
    return (
        <View style={styles[theme].bottom_container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={getWeatherInfo(data, 'weekly')}
                renderItem={({ item }) => <DailyInfoCard weather={item} theme={theme} />}
            />
        </View>

    )
}

export default BottomContainer