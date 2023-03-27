import React from 'react'
import { View, StatusBar } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import Animation from '../../assets/animations/Animation'
import Anims from '../../assets/animations/index'
import styles from './Home.style'

export default function () {
    return (
        <View style={styles.container['light']}>
            <StatusBar
                backgroundColor={'slategray'}
            />
            <View style={styles.search_bar_container['light']}>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("onPress")}
                    onChangeText={(text) => console.log(text)}
                />
            </View>
            <View style={styles.top_container['light']}>
                <View style={{ flex: 4 }}>
                    <Animation source={Anims.cloudy} />
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </View>
            <View style={styles.mid_container['light']}>

            </View>
            <View style={styles.bottom_container['light']}>

            </View>
        </View>
    );
};