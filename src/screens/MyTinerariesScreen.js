import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import Itinerary from '../components/Itinerary'
import { useSelector } from 'react-redux'
import { useAllItinerariesUserMutation } from '../features/itinerariesAPI'
import { ScrollView } from 'react-native-gesture-handler'
const MyTinerariesScreen = () => {
    let user = useSelector(state => state.logged.user)
    const [allItinerariesUser] = useAllItinerariesUserMutation()
    const [itineraries, setItineraries] = React.useState([])
    const reload = useSelector((state) => state.reload.reloadState)
    async function getItineraries() {
        try {
            let res = await allItinerariesUser(user.id)
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
        <ScrollView>
            <View style={styles.container}>
                {
                    itineraries?.map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary} />)
                }
            </View>
        </ScrollView>
    )
}

export default MyTinerariesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        minHeight: height,
        paddingTop: 10,
        backgroundColor: '#ebf1ff'
    }
})