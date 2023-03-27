import React, {useEffect} from 'react'
import { View, StatusBar, Text } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import useFetch from '../../hooks/useFetch'
import styles from './Home.style'

const style = styles['light'] 




const TopContainer = () => {
    return (
        <View style={style.top_container}>
            <View style={style.animation_container}>
                {/* Hava durumuna göre gösterilecek animasyon*/}
                <Animation source={Anims.rainy} />
            </View>
            <View style={style.other_daily_container}>
                {/* Diğer saatlerdeki hava durumları */}
            </View>
        </View>
    )
}


{
    /*
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
    */
}


const BottomContainer = () => {
    return (
        <View style={style.bottom_container}>

        </View>
    )
}

const Searchbar = () => {
    return (
        <View style={style.search_bar_container}>
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
        <View style={style.container}>
            <Statusbar/>
            <Searchbar/>
            <TopContainer/>
            <BottomContainer/>
        </View>
    );
}