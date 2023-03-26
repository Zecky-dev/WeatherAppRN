import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animation from './assets/animations/Animation';

import AnimationFiles from './assets/animations/index'


const Tab = createBottomTabNavigator()

const Home = () => {
    
    return (
        <Animation source={AnimationFiles.files.rainy}/>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
} 

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused, color, size }) => {
                    return <Icon name='home' size={32}/>
                }
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

