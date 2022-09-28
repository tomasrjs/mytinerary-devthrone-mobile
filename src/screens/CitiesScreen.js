import {  Dimensions, StyleSheet, FlatList, TextInput, View } from "react-native";
import React from "react";
import { useGetAllCitiesQuery } from "../features/citiesAPI";
import CityCard from "../components/CityCard";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function CitiesScreen() {
  const [text, onChangeText] = React.useState("");
  const { data } = useGetAllCitiesQuery(text);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search City"
        keyboardType="text"
      />
      <FlatList
        data={data?.response}
        renderItem={({ item }) => <CityCard image={item.photo} idCity={item._id} title={item.city} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: '#EBF1FF',
        paddingTop: 24
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        padding: 5,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 15,
        shadowColor: '#595959',  
        elevation: 15, 
    }
})