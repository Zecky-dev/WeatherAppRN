import React from 'react'
import { Text, View } from 'react-native'
import Animation from '../../assets/animations/Animation/Animation'
import Anims from '../../assets/animations/index'
import styles from './Loading.style'

export default function ({ navigation,loading,theme }) {
    return (
        loading ? 
        <View style={styles[theme].container}>
            <View style={styles[theme].loading_container}>
                <Text style={styles[theme].loading_text}>Yükleniyor..</Text>
            </View>
            <Animation source={Anims.loading} />
        </View>
        : navigation.navigate('Tabs')
    )
}