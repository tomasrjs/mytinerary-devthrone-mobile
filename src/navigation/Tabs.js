import { Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesStack from './CitiesStack';
import HomeScreen from '../screens/HomeScreen';
import Drawer from './Drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5C98FF'
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTintColor: '#3f3d56',
          headerStyle: {
            height: height * 0.1,
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="CitiesScreen"
        component={CitiesStack}
        options={{
          tabBarLabel: 'Cities',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="city" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
      name="AccountDrawer"
      component={Drawer}
      options={{
        tabBarLabel: 'Account',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={size} />
        )
      }}
        
      />
    </Tab.Navigator>
  )
}