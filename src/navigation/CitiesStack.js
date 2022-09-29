import { Dimensions } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsScreen from '../screens/DetailsScreen'
import CitiesScreen from '../screens/CitiesScreen'

const height = Dimensions.get("window").height
export default function CitiesStack() {
    const CitiesStackNavigator = createNativeStackNavigator()
  return (
    <CitiesStackNavigator.Navigator
    initialRouteName='Cities'
    >
        <CitiesStackNavigator.Screen
            name='Details'
            component={DetailsScreen}
            options={{
              headerBackTitleVisible: false,
              headerTintColor: '#3f3d56',
              headerStyle: {
                height: height * 0.08,
              },
            }}
        />
        <CitiesStackNavigator.Screen
            name='Cities'
            component={CitiesScreen}
            options={{
              headerTintColor: '#3f3d56',
              headerStyle: {
                height: height * 0.08,
              },
            }}
        />
    </CitiesStackNavigator.Navigator>
  )
}