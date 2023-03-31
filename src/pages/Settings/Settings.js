import React,{useContext} from 'react'
import { ImageBackground,StatusBar } from 'react-native'
import SettingsCard from '../../components/SecondaryCards/SettingsCard'
import {Context} from '../../context/Context'
import styles from './Settings.style'

const Settings = () => {
    const {theme} = useContext(Context);

    return (
        <ImageBackground 
        style={styles[theme].container}
        source={(theme === 'light')
                ? require('../../assets/images/light_mode_back.jpeg')
                : require('../../assets/images/dark_mode_back.png')}
        >
            <StatusBar barStyle={'light-content'} />
            <SettingsCard />
        </ImageBackground>
    )
}

export default Settings;