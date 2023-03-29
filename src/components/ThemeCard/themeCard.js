import React, { useContext, useState } from 'react'
import { Text, View, Switch } from 'react-native'
import { Context } from '../../context/Context';
import styles from './themeCard.style'

export default function () {
    const { theme, setTheme } = useContext(Context);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        setTheme(()=>{
            if (theme === 'dark')
            return 'light'
            else return 'dark'
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