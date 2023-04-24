import React, { useContext, useState } from 'react'
import { Text, View, Switch } from 'react-native'
import { Context } from '../../../context/Context';
import styles from './themeCard.style'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function () {
    const { theme, setTheme, units, setUnits } = useContext(Context);
    const [themeSwitchEnabled, setThemeSwitchEnabled] = useState(false);
    const [unitSwitchEnabled,setUnitSwitchEnabled] = useState(false);

    // Theme
    const saveThemeAsyncStorage = async (value) => {
        try {
            await AsyncStorage.setItem('theme',value)
        }
        catch(err) {
            // Saving error
        }
    } 

    const themeSwitch = () => {
        setThemeSwitchEnabled(!themeSwitchEnabled);
        setTheme(()=>{
            if (theme === 'dark') {
                saveThemeAsyncStorage('light')
                return 'light'
            }
            else {
                saveThemeAsyncStorage('dark')
                return 'dark'
            }
        })
    }

    // Units
    const saveUnitAsyncStorage = async (value) => {
        try {
            await AsyncStorage.setItem('units',value);
        }
        catch(err) {
            // Saving error
        }
    } 
    
    const unitSwitch = () => {
        setUnitSwitchEnabled(!unitSwitchEnabled);
        saveUnitAsyncStorage(unitSwitchEnabled ? JSON.stringify({tempUnit: "°F", velocityUnit: "mph"}) : JSON.stringify({tempUnit: "°C", velocityUnit: "km/sa"}));
        setUnits(() => {
            if(JSON.parse(units).tempUnit === "°C") {
                return JSON.stringify({
                    tempUnit: "°F",
                    velocityUnit: "mph"
                })
            }
            else {
                return JSON.stringify({
                    tempUnit: "°C",
                    velocityUnit: "km/sa"
                })
            }
        })
    }
    
    

    return (
        
        <View>
            <View style={styles[theme].container}>
                <View style={styles[theme].left_container}>
                    <Text style={styles[theme].text}>Temayı değiştir: {theme === 'dark' ? 'Koyu' : 'Açık'}</Text>
                </View>
                <View style={styles[theme].right_container}>
                    <Switch
                        onValueChange={themeSwitch}
                        value={themeSwitchEnabled}
                    />
                </View>
            </View>

            <View style={[styles[theme].container,{marginTop:16,}]}>
                <View style={styles[theme].left_container}>
                    <Text style={styles[theme].text}>Sıcaklık ve Hız Birimleri: {JSON.parse(units).tempUnit} - {JSON.parse(units).velocityUnit}</Text>
                </View>
                <View style={styles[theme].right_container}>
                    <Switch
                        onValueChange={unitSwitch}
                        value={unitSwitchEnabled}
                    />
                </View>
            </View>


        </View>
        
    )
}