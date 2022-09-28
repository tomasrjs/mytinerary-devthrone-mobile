import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
export default function City(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.city}</Text>
            <Image style={styles.img} source={{ uri: props.image }} resizeMode="cover" />
            <View style={styles.containerInfo}>
                    <Text style={styles.text}>
                        <Image style={styles.icon} source={require('../../assets/globe.png')} />
                        {`   ${props.country}`}
                    </Text>
                    <Text style={styles.text}>
                        <Image style={styles.icon} source={require('../../assets/earth-day.png')} />
                        {`   ${(new Date(props.fundation)).getUTCFullYear()}`}
                    </Text>
                    <Text style={styles.text}>
                        <Image style={styles.icon} source={require('../../assets/crowd.png')} />
                        {`   ${ props.population}`}
                    </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: width * 0.9,
        height: height * 0.4,
        backgroundColor: "#f0f8ff",
        padding: 15,
        borderRadius: 15
    },
    title:{
        textAlign: "center",
        fontSize: 20,
        padding: 10
    },
    img:{
        width: "100%",
        height: "65%",
        borderRadius: 15
    },
    containerInfo: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10
    },
    text:{
        fontSize: 16
    }, 
    icon:{
        width: 20,
        height: 20,
        
    }
})
