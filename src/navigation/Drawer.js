import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import AccountScreen from '../screens/AccountScreen';
import MyTinerariesScreen from '../screens/MyTinerariesScreen';
import SignOutScreen from '../screens/auth/SignOutScreen';
const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Account"
        >
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerTintColor: '#3f3d56',
                }}
            />
            <Drawer.Screen
                name="MyTineraries"
                component={MyTinerariesScreen}
                options={{
                    headerTintColor: '#3f3d56',
                }}
            />
            <Drawer.Screen
                name="Out"
                component={SignOutScreen}
                options={{
                    headerTintColor: '#3f3d56',
                }}
            />
        </Drawer.Navigator>
    )
}

export default Drawer
