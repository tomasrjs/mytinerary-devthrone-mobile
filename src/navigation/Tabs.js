import { View, Text, Dimensions } from 'react-native'
import { Screen } from 'react-native-screens';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesStack from './CitiesStack';
import HomeScreen from '../screens/HomeScreen';
import Drawer from './Drawer';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'purple'
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: 'aliceblue',
          headerStyle: {
            backgroundColor: '#5C98FF',
            height: height * 0.1,
          },
        }}
      />
      <Tab.Screen
        name="CitiesScreen"
        component={CitiesStack}
        options={{
          tabBarLabel: 'Cities',
          headerShown: false
        }}
      />
      <Tab.Screen 
      name="AccountDrawer"
      component={Drawer}
      options={{
        tabBarLabel: 'Account',
        headerShown: false}}
        
      />
    </Tab.Navigator>
  )
}