import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animation from './assets/animations/Animation';
import Animations from './assets/animations/index'
import Home from './pages/Home';
import Settings from './pages/Settings';

const Tab = createBottomTabNavigator()



const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Icon name='home' size={32}/>
                },
                headerShown:false
            }}
            />
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>        
    )
}



export default function () {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
    )
}

