import React, { useContext } from 'react'
import { View, StatusBar, ImageBackground, ScrollView } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import useFetch from '../../hooks/useFetch'
import styles from './Home.style'
import InfoCard from '../../components/InfoCard'
import DailyInfoCard from '../../components/DailyInfoCard'
import HourlyInfoCard from '../../components/HourlyInfoCard'
import { Context } from '../../context/Context'

const Statusbar = () => <StatusBar translucent backgroundColor='transparent' />

const Searchbar = ({theme}) => {
    return (
        <View style={styles[theme].search_bar_container}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

const TopContainer = ({theme}) => {
    return (
        <View style={styles[theme].top_container}>
            <View style={styles[theme].animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={Anims.sunny} />
            </View>
            <ScrollView style={styles[theme].other_daily_container} showsVerticalScrollIndicator={false}>
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
                <HourlyInfoCard />
            </ScrollView>
        </View>
    )
}



const MidContainer = ({theme}) => <InfoCard theme={theme} />


const BottomContainer = ({theme}) => {
    return (
        <ScrollView style={styles[theme].bottom_container} horizontal showsHorizontalScrollIndicator={false}>
            <DailyInfoCard />
            <DailyInfoCard />
            <DailyInfoCard />
            <DailyInfoCard />
            <DailyInfoCard />
            <DailyInfoCard />
            <DailyInfoCard />
        </ScrollView>
    )
}

export default function () {
    const {theme} = useContext(Context);
    const { data, loading, error } = useFetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul')

    return (
        <ImageBackground style={styles[theme].container} source={(theme==='light')?require('../../assets/images/light_mode_back.jpeg'):require('../../assets/images/dark_mode_back.png')}>
            <Statusbar />
            {
                loading ?
                    (
                        <Animation source={Anims.loading} />
                    )
                    : error ? (
                        <Animation source={Anims.error} />
                    )
                        : (
                            <>
                                <Searchbar theme={theme} />
                                <TopContainer theme={theme}/>
                                <MidContainer theme={theme} />
                                <BottomContainer theme={theme}/>
                            </>
                        )
            }

        </ImageBackground>
    );
}