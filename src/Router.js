import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Settings from './pages/Settings';


const Tab = createBottomTabNavigator()



const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                
            },
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,

        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return focused ? <Icon name='home' size={32} color={'black'} /> : <Icon name='home-outline' size={32} color={'black'} />
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            focused ? <Icon name='settings' size={32} color={'black'} /> : <Icon name='settings-outline' size={32} color={'black'} />
                        )
                    },

                }}
            />
        </Tab.Navigator>
    )
}



export default function () {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

