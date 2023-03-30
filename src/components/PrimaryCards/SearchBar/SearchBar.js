import React from 'react'
import { View } from 'react-native'
import SearchBar from 'react-native-dynamic-search-bar'
import styles from './SearchBar.style'

const Searchbar = ({ theme, modal }) => {
    const { modalVisible, setModalVisible } = modal
    return (
        <View style={styles[theme].search_bar_container}>
            <SearchBar
                placeholder="Şehir ismi giriniz..."
                onChangeText={(text) => console.log(text)}
                onTouchStart={() => setModalVisible(!modalVisible)}
            />
        </View>
    )
}

export default Searchbar