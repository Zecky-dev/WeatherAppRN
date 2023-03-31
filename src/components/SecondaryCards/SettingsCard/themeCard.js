import React, { useContext, useState } from 'react'
import { Text, View, Switch } from 'react-native'
import { Context } from '../../../context/Context';
import styles from './themeCard.style'

import AsyncStorage from '@react-native-async-storage/async-storage'

export default function () {
    const { theme, setTheme } = useContext(Context);
    const [isEnabled, setIsEnabled] = useState(false);
    
    const saveSettingsAsyncStorage = async (value) => {
        try {
            await AsyncStorage.setItem('theme',value)
        }
        catch(err) {
            // Saving error
        }
    } 

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        setTheme(()=>{
            if (theme === 'dark') {
                saveSettingsAsyncStorage('light')
                return 'light'
            }
            else {
                saveSettingsAsyncStorage('dark')
                return 'dark'
            }
        })
    }

    return (
        <View style={styles[theme].container}>
            <View style={styles[theme].left_container}>
                <Text style={styles[theme].text}>Temayı değiştir: {theme === 'dark' ? 'Koyu' : 'Açık'}</Text>
            </View>
            <View style={styles[theme].right_container}>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}