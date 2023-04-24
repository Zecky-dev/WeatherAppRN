import React, {useEffect} from 'react'
import { Appearance } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { Context } from './context/Context';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator()
const DefaultScheme = Appearance.getColorScheme();

const Tabs = ({theme}) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: theme === 'dark' ? 'black' : 'white',
                borderTopWidth: 0,
            },
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown:false,
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused
                        ? <Icon name='home' size={32} color={theme=='dark' ? 'white' : 'black'} /> 
                        : <Icon name='home-outline' size={32} color={theme=='dark' ? 'white' : 'black'} />
                    },
                    
                }}
            />
            
            
            
        <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            focused
                            ? <Icon name='settings' size={32} color={theme=='dark' ? 'white' : 'black'} />
                            : <Icon name='settings-outline' size={32} color={theme=='dark' ? 'white' : 'black'} />
                        )
                    },
                    
                }}
            />
                
        </Tab.Navigator>
    )
}

export default function () {
    
    const [theme, setTheme] = React.useState(DefaultScheme)
    const [units,setUnits] = React.useState(JSON.stringify({tempUnit: "°C",velocityUnit: "km/s"}));

    useEffect(() => {
        const getTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme')
            const savedUnits = await AsyncStorage.getItem('units');
            setUnits(savedUnits)
            if(savedTheme !== null) {
                setTheme(savedTheme)
                setUnits(savedUnits)
            }
        }
        getTheme()
    },[])

    const [selectedLocation, setSelectedLocation] = 
    React.useState({ address_name: 'Istanbul, Turkiye', lng: 28.9784, lat: 41.0082 })

    return (
        <Context.Provider value={{theme,setTheme,selectedLocation,setSelectedLocation,units,setUnits}}>
            <NavigationContainer>
                <Tabs theme={theme}/>
            </NavigationContainer>
        </Context.Provider>

    )
}

