import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import Tabs from './Tabs';
const height = Dimensions.get("window").height
const AuthNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='signin'>
            <Stack.Screen
                name='signin'
                component={SignIn}
                options={{
                    title: 'Sign In',
                    headerTintColor: 'aliceblue',
                    headerStyle: {
                        backgroundColor: '#5C98FF',
                        height: height * 0.08,
                    },
                }}
            />
            <Stack.Screen
                name='signup'
                component={SignUp}
                options={{
                    title: 'Sign Up',
                    headerTintColor: 'aliceblue',
                    headerStyle: {
                        backgroundColor: '#5C98FF',
                        height: height * 0.08,
                    },
                }}
            />
            <Stack.Screen
            name='HomeStak'
            component={Tabs}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}

export default AuthNavigator

/* const styles = StyleSheet.create({}) */