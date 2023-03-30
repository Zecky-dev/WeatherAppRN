import React, { useContext, useState } from 'react'
import { View, StatusBar, ImageBackground, FlatList, Text } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import useFetch from '../../hooks/useFetch'
import styles from './Home.style'
import InfoCard from '../../components/InfoCard'
import DailyInfoCard from '../../components/DailyInfoCard'
import HourlyInfoCard from '../../components/HourlyInfoCard'
import { Context } from '../../context/Context'
import Modal from 'react-native-modal'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Loading from '../Loading'


// Functions

// Animasyon ve havaa durumunu belirlemek için gerekli fonksiyon
const getWeatherStatus = (weatherCode) => {
    if (weatherCode == 0) {
        return { animation: Anims.sunny, status: 'Açık' }
    }

    else if (weatherCode == 1 || weatherCode == 2 || weatherCode == 3) {
        return { animation: Anims.partly_cloudy, status: 'Parçalı Bulutlu' }
    }

    else if (weatherCode == 45 || weatherCode == 48) {
        return { animation: Anims.foggy, status: 'Sisli' };
    }

    else if (weatherCode == 51 || weatherCode == 53 || weatherCode == 55 || weatherCode == 56 || weatherCode == 57) {
        return { animation: Anims.cloudy, status: 'Bulutlu' };
    }

    else if (weatherCode == 61 || weatherCode == 63 || weatherCode == 65 || weatherCode == 66 || weatherCode == 67) {
        return { animation: Anims.rainy, status: 'Yağmurlu' };
    }

    else if (weatherCode == 71 || weatherCode == 73 || weatherCode == 75 || weatherCode == 77) {
        return { animation: Anims.snow, status: 'Kar Yağışlı' };
    }

    else if (weatherCode == 80 || weatherCode == 81 || weatherCode == 82 || weatherCode == 85 || weatherCode == 86) {
        return { animation: Anims.storm, status: 'Sağanak Yağış' };
    }

    else if (weatherCode == 95 || weatherCode == 96 || weatherCode == 99) {
        return { animation: Anims.thunder, status: 'Fırtına' };
    }
}

// Anlık, günlük ve haftalık hava durumlarını getirmek için gerekli fonksiyon
const getWeatherInfo = (data, type) => {
    if (type == 'daily') {
        let daily_info = []
        const hourly = data.hourly;
        for (i = 0; i < 24; i++) {
            daily_info.push(
                {
                    animation: getWeatherStatus(hourly.weathercode[i]).animation,
                    degree: hourly.temperature_2m[i],
                    time: hourly.time[i],
                    weatherStatus: getWeatherStatus(hourly.weathercode[i]).status,
                    weatherCode: hourly.weathercode[i]
                }
            )
        }
        return daily_info
    }
    else if (type == 'current') {
        const currentWeather = data.current_weather;
        const { weathercode, temperature } = currentWeather;
        return {
            animation: getWeatherStatus(weathercode).animation,
            status: getWeatherStatus(weathercode).status,
            degree: temperature,
        }
    }
    else if (type == 'weekly') {
        let weekly_info = [];
        const weekly = data.hourly;
        let day = [];
        let i = 0, j = 0, k = 24
        while (i < 7) {
            for (m = j; m < k; m++) {
                day.push(
                    {
                        animation: getWeatherStatus(weekly.weathercode[m]).animation,
                        degree: weekly.temperature_2m[m],
                        time: weekly.time[m],
                        weatherStatus: getWeatherStatus(weekly.weathercode[m]).status
                    }
                )
            }
            weekly_info.push(day)
            day = []
            j += 24
            k += 24
            i++
        }
        return weekly_info
    }
}

// Components
const Statusbar = () => <StatusBar translucent backgroundColor='transparent' />

const Searchbar = ({ theme, modal }) => {
    const { modalVisible, setModalVisible } = modal
    return (
        <View style={styles[theme].search_bar_container}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onChangeText={(text) => console.log(text)}
                onTouchStart={() => setModalVisible(!modalVisible)}
            />
        </View>
    )
}

const TopContainer = ({ data, theme }) => {
    return (
        <View style={styles[theme].top_container}>
            <View style={styles[theme].animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={getWeatherInfo(data, 'current').animation} />
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

const MidContainer = ({ theme, weather, location }) => <InfoCard theme={theme} weather={weather} location={location} />

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

const ModalContainer = ({ modalVisible, setModalVisible, setSelectedLocation }) => {
    return (
        <Modal
            isVisible={modalVisible}
            onBackButtonPress={() => setModalVisible(!modalVisible)}
            onBackdropPress={() => setModalVisible(!modalVisible)}
        >
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 4, }}>
                <GooglePlacesAutocomplete
                    placeholder='Ara'

                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        setSelectedLocation({
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                            address_name: details.formatted_address
                        })
                        setModalVisible(!modalVisible)
                    }}
                    styles={
                        {
                            textInput: {
                                borderBottomWidth: 0.8,
                                borderBottomColor: 'gray',
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 0,
                            }
                        }
                    }
                    enablePoweredByContainer={false}
                    query={{
                        key: 'AIzaSyAwXeRKWDGslG6VS_wXXfCA6Hmmwy3YYQM',
                        language: 'tr',
                    }}
                />
            </View>
        </Modal>
    )
}

export default function () {
    const { theme } = useContext(Context);
    const [selectedLocation, setSelectedLocation] = useState({ address_name: 'Istanbul, Turkiye', lng: 28.9784, lat: 41.0082 })

    const { data, loading, error } = useFetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul`)

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <ImageBackground
            style={styles[theme].container}
            source={(theme === 'light')
                ? require('../../assets/images/light_mode_back.jpeg')
                : require('../../assets/images/dark_mode_back.png')}>
            <Statusbar />
            {
                loading ?
                    (
                        <Loading loading={loading} theme={theme} />
                    )
                    : error ? (
                        <Animation source={Anims.error} />
                    )
                        : data ?
                            (
                                <>
                                    <Searchbar theme={theme} modal={{ setModalVisible, modalVisible }} />
                                    <TopContainer data={data} theme={theme} />
                                    <MidContainer theme={theme} weather={getWeatherInfo(data, 'current')} location={selectedLocation.address_name} />
                                    <BottomContainer data={data} theme={theme} />
                                    <ModalContainer modalVisible={modalVisible} setModalVisible={setModalVisible} setSelectedLocation={setSelectedLocation} />
                                </>
                            )
                            : null
            }

        </ImageBackground>
    );
}