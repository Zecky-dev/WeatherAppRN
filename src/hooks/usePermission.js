import { useEffect} from "react";

//permission request
import { PermissionsAndroid } from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import Geocoder from 'react-native-geocoding'

const usePermission = (setSelectedLocation,API_KEY) => {
    
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, null
            )
            if (granted === 'granted') {
                GeoLocation.getCurrentPosition(
                    (position) => {
                        Geocoder.init(API_KEY, { language: "tr" })
                        const { latitude, longitude } = position.coords
                        Geocoder.from({
                            latitude, longitude
                        }).then(
                            json => {
                                const address_name = json.results[8].formatted_address
                                setSelectedLocation({
                                    address_name, lng: longitude, lat: latitude
                                })
                            }
                        )
                    }
                )
            }
            else {
                console.log('You cannot use Geolocation');
            }
        }
        catch (err) {
            console.log(`Error: ${err}`)
            return false;
    
        }
    }

    useEffect(()=> {
        requestLocationPermission()
    },[])

}

export default usePermission;