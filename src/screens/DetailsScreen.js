import { View, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import City from '../components/City'
import { useGetCityQuery } from '../features/citiesAPI'
import Itineraries from '../components/Itineraries'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function DetailsScreen() {
    const route = useRoute()
    const { data } = useGetCityQuery(route.params.id)

    return (
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <City
                    city={data?.response.city}
                    population={data?.response.population}
                    fundation={data?.response.fundation}
                    country={data?.response.country}
                    image={data?.response.photo}
                />
                <Itineraries id={route.params.id} />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: '#EBF1FF',
        paddingTop: 24
    },
})