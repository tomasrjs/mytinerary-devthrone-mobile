import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useAllItinerariesMutation } from '../features/itinerariesAPI'
import { useSelector } from 'react-redux'
import Itinerary from './Itinerary'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Itineraries(props) {
    const [allItineraries] = useAllItinerariesMutation()
    const [itineraries, setItineraries] = React.useState([])
    const reload = useSelector((state) => state.reload.reloadState)
    async function getItineraries() {
        try {
            let res = await allItineraries(props.id)
            if (res.data?.success) {
                setItineraries(res.data?.response)
            } else {
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        getItineraries()
    }, [reload])
    return (
        <View style={styles.container}>
            {
                itineraries.map((item) => <Itinerary key={Math.random().toString(12).substring(0)} itinerary={item} />)
            }
            {
                itineraries.length === 0 && <Text>No itineraries yet</Text>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: 'auto',
        backgroundColor: '#f0f8ff',
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        padding: 15,
    }
})