import React from 'react'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Modal from 'react-native-modal'
import styles from './ModalContainer.style'

const ModalContainer = ({ modalVisible, setModalVisible, setSelectedLocation,theme }) => {
    return (
        <Modal
            isVisible={modalVisible}
            onBackButtonPress={() => setModalVisible(!modalVisible)}
            onBackdropPress={() => setModalVisible(!modalVisible)}
        >
            <View style={{ backgroundColor: 'white', width: '100%', height: 200, borderRadius: 16}}>
                <GooglePlacesAutocomplete
                    placeholder='Ara'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        setSelectedLocation({
                            lat: details.geometry.location.lat,
                            lng: details.geometry.location.lng,
                            address_name: details.formatted_address
                        })
                        setModalVisible(!modalVisible)
                    }}
                    styles={{
                        textInputContainer: {
                            borderBottomWidth: 2,
                        },
                        textInput: {
                            color: 'black',
                        },
                        predefinedPlacesDescription: {
                            color: 'purple',
                        },
                        separator: {
                            borderWidth: 0.3,
                            borderColor: 'slategray'
                        },
                        description: {
                            color: 'black',
                        },
                    }
                    }
                    query={{
                        key: 'AIzaSyAwXeRKWDGslG6VS_wXXfCA6Hmmwy3YYQM',
                        language: 'tr',
                    }}
                />
            </View>
        </Modal>
    )
}

export default ModalContainer