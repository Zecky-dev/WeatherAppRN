import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import styles from './Home.style'


const TopContainer = () => {
    return (
        <View style={styles.top_container['light']}>
            <View style={styles.animation_container['light']}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={Anims.rainy} />
            </View>
            <View style={styles.other_daily_container['light']}>
                {/* Diğer saatlerdeki hava durumları */}
            </View>
        </View>
    )
}

const MidContainer = () => {
    return (
        // Hava durumu bilgileri
        <View style={styles.mid_container['light']}>
            <View style={styles.mid_left['light']}>
                <Text style={styles.degree['light']}>
                    7 °C
                </Text>
            </View>
            <View style={styles.mid_right['light']}>
                <View style={styles.mid_right_inner_top['light']}>
                    <Text style={styles.city['light']}>Istanbul</Text>
                </View>
                <View style={styles.mid_right_inner_bottom['light']}>
                    <Text style={styles.weather_status['light']}>
                        Yağışlı
                    </Text>
                </View>
            </View>
        </View>
    )
}

const BottomContainer = () => {
    return (
        <View style={styles.bottom_container['light']}>

        </View>
    )
}

const Searchbar = () => {
    return (
        <View style={styles.search_bar_container['light']}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onPress={() => alert("onPress")}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

const Statusbar = () => {
    return (
        <StatusBar
        backgroundColor={'slategray'}
        />
    )
}




export default function () {
    return (
        <View style={styles.container['light']}>
            <Statusbar/>
            <Searchbar/>
            <TopContainer/>
            <MidContainer/>
            <BottomContainer/>
        </View>
    );
};