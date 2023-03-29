import React from 'react'
import { View, StatusBar , ImageBackground, ScrollView,KeyboardAvoidingView, FlatList,Text } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import useFetch from '../../hooks/useFetch'
import styles from './Home.style'
import InfoCard from '../../components/InfoCard'
import DailyInfoCard from '../../components/DailyInfoCard'
import HourlyInfoCard from '../../components/HourlyInfoCard'


const style = styles['light'] 
const uuidv4 = require("uuid/dist/v4")

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

const TopContainer = ({data}) => {
    const getWeatherSource = () => {
        const weatherCode = data.current_weather.weathercode;
        if(weatherCode == 0) return Anims.sunny
        else if(weatherCode == 1 || 2 || 3 ) return Anims.partly_cloudy
        else if(weatherCode == 45 || 48) return Anims.foggy;
        else if(weatherCode == 51 || 53 || 55 || 56 || 57) return Anims.cloudy;
        else if(weatherCode ==  61 || 63 || 65 || 66 || 67) return Anims.rainy;
        else if(weatherCode ==  71 || 73 || 75 || 77) return Anims.snow;
        else if(weatherCode ==  80 || 81 || 82 || 85 || 86) return Anims.storm;
        else if(weatherCode ==  95 || 96 || 99) return Anims.thunder;
        else return Anims.sunny
    }




    return (
        <View style={style.top_container}>
            <View style={style.animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={getWeatherSource()} />
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


const BottomContainer = ({data}) => {
    return (
        <View style={style.bottom_container}>
            <FlatList
                data={data.hourly.time}
                renderItem={({item}) => <Text>{item}</Text>}
            />
        </View>
        



        /*
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                <DailyInfoCard />
                <DailyInfoCard />
                <DailyInfoCard />
                <DailyInfoCard/>
                <DailyInfoCard />
                <DailyInfoCard />
                <DailyInfoCard/>
        </ScrollView>
        */
    )
}

export default function () {

    // useFetch test
    const {data,loading,error} = useFetch('https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul')
    console.log(data)
    
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
                    : data ?
                    (
                        <>
                            <Searchbar />
                            <TopContainer data={data} />
                            <MidContainer />
                            <BottomContainer data={data} /> 
                        </>
                    )
                    : null
                }
                                       
            </ImageBackground>        
    );
}