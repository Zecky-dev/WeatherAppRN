// Native Packages
import React, { useContext, useState, useEffect } from 'react'
import { StatusBar, ImageBackground } from 'react-native'

//Animations
import Animation from '../../assets/animations/Animation/Animation'
import Anims from '../../assets/animations/index'

//Custom Hooks
import useFetch from '../../hooks/useFetch'

//Styles
import styles from './Home.style'

//Context api
import { Context } from '../../context/Context'

//Functions
import getWeatherInfo from '../../Functions/getWeatherInfo'

//permission request
import { PermissionsAndroid } from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding'

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
    const { theme } = useContext(Context);
    const [selectedLocation, setSelectedLocation] = useState({ address_name: 'Istanbul, Turkiye', lng: 28.9784, lat: 41.0082 })
    const [modalVisible, setModalVisible] = useState(false)

    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lng}&current_weather=true&hourly=temperature_2m,weathercode&timezone=Europe/Istanbul`
    const { data, loading, error } = useFetch(API_URL)

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, null
            )
            if (granted === 'granted') {
                GeoLocation.getCurrentPosition(
                    (position) => {
                        Geocoder.init("AIzaSyAwXeRKWDGslG6VS_wXXfCA6Hmmwy3YYQM", { language: "tr" })
                        const { latitude, longitude } = position.coords
                        Geocoder.from({
                            latitude, longitude
                        }).then(
                            json => {
                                const address_name = json.results[8].formatted_address
                                setSelectedLocation({
                                    address_name, lng: longitude, lat: latitude
                                })
                            }
                        )
                    }
                )
            }
            else {
                console.log('You cannot use Geolocation');
            }
        }
        catch (err) {
            console.log(`Error: ${err}`)
            return false;

        }
    }

    useEffect(() => { requestLocationPermission() }, [])

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