import React,{useContext} from 'react'
import { ImageBackground,StatusBar } from 'react-native'
import ThemeCard from '../../components/ThemeCard/themeCard'
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
            <ThemeCard />
        </ImageBackground>
    )
}

export default Settings;