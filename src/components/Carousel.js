import React, {useEffect} from 'react'
import { View, StyleSheet, Text, ImageBackground, Button } from "react-native";
import { useGetAllCitiesQuery } from '../features/citiesAPI';
import { useEffect } from "react";

export default function Carousel() {
    const {data} = useGetAllCitiesQuery('')

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Popular MyTineraries</Text>
        <View></View>
    </View>
  )
}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        height: 780,
        backgroundColor: "#ebf1ff",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        color: "#3F3D56",
        fontSize: 20,
        fontWeight: "bold",
      },
})