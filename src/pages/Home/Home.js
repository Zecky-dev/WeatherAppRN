// Native Packages
import React, { useContext, useState, useEffect } from 'react'
import { StatusBar, ImageBackground } from 'react-native'

//Animations
import Animation from '../../assets/animations/Animation/Animation'
import Anims from '../../assets/animations/index'

//Custom Hooks
import useFetch from '../../hooks/useFetch'
import usePermission from '../../hooks/usePermission'

//Styles
import styles from './Home.style'

//Context api
import { Context } from '../../context/Context'

//Functions
import getWeatherInfo from '../../Functions/getWeatherInfo'

// Components
import Loading from '../Loading'
import TopContainer from '../../components/PrimaryCards/TopContainer'
import SearchBar from '../../components/PrimaryCards/SearchBar'
import BottomContainer from '../../components/PrimaryCards/BottomContainer'
import ModalContainer from '../../components/PrimaryCards/ModalContainer'
import InfoCard from '../../components/SecondaryCards/InfoCard'
const Statusbar = () => <StatusBar translucent backgroundColor='transparent' />
const MidContainer = ({ theme, weather, location }) => <InfoCard theme={theme} weather={weather} location={location} />



export default function () {
    const { theme,selectedLocation,setSelectedLocation } = useContext(Context);
    const [modalVisible, setModalVisible] = useState(false)

    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul`
    const { data, loading, error } = useFetch(API_URL)
    usePermission(setSelectedLocation);

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
                                    <SearchBar
                                        theme={theme}
                                        modal={{ setModalVisible, modalVisible }}
                                    />

                                    <TopContainer
                                        data={data}
                                        theme={theme}
                                    />

                                    <MidContainer
                                        theme={theme}
                                        weather={getWeatherInfo(data, 'current')}
                                        location={selectedLocation.address_name}
                                    />

                                    <BottomContainer
                                        data={data}
                                        theme={theme} />

                                    <ModalContainer
                                        modalVisible={modalVisible}
                                        setModalVisible={setModalVisible}
                                        setSelectedLocation={setSelectedLocation}
                                    />
                                </>
                            )
                            : null
            }

        </ImageBackground>
    );
}