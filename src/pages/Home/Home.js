import React from 'react'
import { View, StatusBar, ImageBackground, ScrollView} from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import useFetch from '../../hooks/useFetch'
import styles from './Home.style'
import InfoCard from '../../components/InfoCard'
import DailyInfoCard from '../../components/DailyInfoCard'
import HourlyInfoCard from '../../components/HourlyInfoCard'


const style = styles['light']


const Statusbar = () => <StatusBar translucent backgroundColor='transparent' />

const Searchbar = () => {
    return (
        <View style={style.search_bar_container}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

const TopContainer = () => {
    return (
        <View style={style.top_container}>
            <View style={style.animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={Anims.sunny} />
            </View>
            <ScrollView style={style.other_daily_container} showsVerticalScrollIndicator={false}>
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


const MidContainer = () => <InfoCard />


const BottomContainer = () => {
    return (
        <ScrollView style={style.bottom_container} horizontal showsHorizontalScrollIndicator={false}>
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

    // useFetch test
    const {data,loading,error} = useFetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul')
    console.log(data,loading,error)

    return (
            <ImageBackground style={style.container} source={require('../../assets/images/light_mode_back.jpeg')}>
                <Statusbar />
                {
                    loading ? 
                    (
                        <Animation source={Anims.loading}/>
                    ) 
                    : error ? (
                        <Animation source={Anims.error}/>
                    )
                    : (
                        <>
                            <Searchbar />
                            <TopContainer />
                            <MidContainer />
                            <BottomContainer /> 
                        </>
                    )
                }
                                       
            </ImageBackground>        
    );
}