import { View, Text, Dimensions, StyleSheet, Button, Image } from "react-native";
import React from "react";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function CityCard(props) {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={{uri: props.image}} resizeMode="cover"/>
        <View style={styles.containerBody}>
            <Text style={styles.text}>{props.title}</Text>
            <Button style={styles.btn} title='See More' color='#5C98FF' />
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width *0.9,
        height: 300,
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    containerBody: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 10
    },
    text: {
        backgroundColor: '#00000093',
        width: '100%',
        color: 'aliceblue',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "500"
    },
})