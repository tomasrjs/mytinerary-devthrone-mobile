import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch } from "react-redux";
import { useSignInMutation } from '../../features/usersAPI';
import { setUser, setToken } from '../../features/loggedSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const SignIn = () => {
    const [mail, setMail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();
    const [signIn] = useSignInMutation();
    const dispatch = useDispatch();
    const sendSignIn = () => {
        signIn({
            mail: mail,
            password: password,
            from: "form",
        })
            .then((response) => {
                AsyncStorage.setItem( "token", response.data.response.token);
                dispatch(setUser(response.data.response.user));
                dispatch(setToken(response.data.response.token))
                navigation.navigate("HomeStak")
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Mail</Text>
                <TextInput
                    style={styles.input}
                    value={mail}
                    onChangeText={setMail}
                    placeholder="mail@gmail.com"
                    keyboardType='email-address'
                    name='mail'
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Password"
                    keyboardType="text"
                    name='password'
                />
                <TouchableHighlight onPress={sendSignIn}>
                    <View style={styles.button}>
                        <Text style={{ color: 'aliceblue', fontSize: 20, }}>Sign In</Text>
                    </View>
                </TouchableHighlight>
                <View>
                    <Text style={styles.text}> Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('signup')}>

                        <Text style={styles.textFooter}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        lexDirection: 'row',
        justifyContent: 'center',
        width: width,
        height: height,
        backgroundColor: '#ebf1ff',
        padding: 10,

    },
    containerForm: {
        width: '100%',
        backgroundColor: '#f0f8ff',
        padding: 30,
        shadowColor: '#595959',
        elevation: 13,
        borderRadius: 15

    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
        color: '#3f3d56'
    },
    input: {
        fontSize: 18,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#595959',
        elevation: 13,
    },
    button: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#5c98ff',
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: 7,
    },
    textFooter: {
        marginStart: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5c98ff'
    }

})