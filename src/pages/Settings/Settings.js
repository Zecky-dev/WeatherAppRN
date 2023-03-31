import React,{useContext} from 'react'
import { ImageBackground,StatusBar } from 'react-native'
import SettingsCard from '../../components/SecondaryCards/SettingsCard'
import {Context} from '../../context/Context'
import styles from './Settings.style'
import {DARK_MODE,LIGHT_MODE} from '@env'

const Settings = () => {
    const {theme} = useContext(Context);

    return (
        <ImageBackground 
        style={styles[theme].container}
        source={(theme === 'light')
                ? require(LIGHT_MODE)
                : require(DARK_MODE)}
        >
            <StatusBar barStyle={'light-content'} />
            <SettingsCard />
        </ImageBackground>
    )
}

export default Settings;