import React from 'react';
import AuthNavigator from './src/navigation/AuthNavigator';
import 'react-native-gesture-handler';
import { useSignInTokenMutation } from './src/features/usersAPI';
import { setUser } from './src/features/loggedSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
export default function AppIndex() {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const [signInToken] = useSignInTokenMutation();
  async function verifyToken(token) {
    try {
      let res = await signInToken(token);
      if (res.data?.success) {
        dispatch(setUser(res.data?.response.user));
        navigation.navigate("HomeStak")
      } else {
        AsyncStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
      AsyncStorage.removeItem("token");
    }
  }
  React.useEffect(() => {
    let token
    AsyncStorage.getItem("token").then(value => token = value)
    if (token) {
      verifyToken(token);
    }
  }, []);
  return (

    
      <AuthNavigator />
    

  );
}