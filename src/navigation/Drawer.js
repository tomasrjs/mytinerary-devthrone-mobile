import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import AccountScreen from '../screens/AccountScreen';
import MyTinerariesScreen from '../screens/MyTinerariesScreen';
import SignOutScreen from '../screens/auth/SignOutScreen';
const Drawer = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="Account">
            <Drawer.Screen
                name="Account"
                component={AccountScreen}
            />
            <Drawer.Screen
                name="MyTineraries"
                component={MyTinerariesScreen}
            />
            <Drawer.Screen
                name="Out"
                component={SignOutScreen}
            />
        </Drawer.Navigator>
    )
}

export default Drawer
