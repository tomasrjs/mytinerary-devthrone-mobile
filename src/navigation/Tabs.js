import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesScreen from '../screens/CitiesScreen';
import HomeScreen from '../screens/HomeScreen';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Tabs() {
    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
        <Tab.Screen
         name="Home" 
         component={HomeScreen}
         options={{
          headerStyle: {
            backgroundColor: '#5C98FF',
            height: height*0.1,
            flex: 1,
            justifyContent: 'flex-start',
          },
         }}
         />
        <Tab.Screen 
        name="Cities" 
        component={CitiesScreen}
        options={{
          headerStyle: {
            backgroundColor: '#5C98FF',
            height: height*0.1,
            flex: 1,
            justifyContent: 'flex-start',
          },
         }}
         />
    </Tab.Navigator>
  )
}