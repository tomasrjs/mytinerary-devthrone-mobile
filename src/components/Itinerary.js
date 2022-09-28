import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight, Dimensions } from 'react-native'
import React from 'react'
import Likes from './Likes'
import DisplayComments from './DisplayComments'
import Activities from './Activities'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Itinerary(props) {
    const itinerary = props.itinerary
    const [buttonState, setButtonState] = React.useState(false)
    const getItem = (data, index) => ({
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`
    });
    const getItemCount = (data) => 50;

    return (
        <View style={styles.containerItinerary}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{itinerary.name}</Text>
            <View style={styles.containerUser}>
                <Image
                    style={styles.img}
                    source={{ uri: itinerary.user.photo }}
                    resizeMode="cover"
                />
                <View style={styles.containerInformation}>
                    <Text style={{ fontWeight: '500' }}>
                        {itinerary.user.name} {itinerary.user.lastName}
                    </Text>
                    <Text>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/reloj.png')}
                        />
                        {`  ${itinerary.duration}h`}
                    </Text>
                </View>
            </View>
            <View style={styles.containerTagsPrice}>
                <View style={styles.containerTags}>
                    {
                        itinerary.tags.map((item) => <Text key={Math.random().toString(12).substring(0)} style={{ marginEnd: 7 }}>{item}</Text>)
                    }
                </View>
                <View>
                    <Text>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/billete-de-dolar.png')}
                        />
                        {`  ${itinerary.price}`}
                    </Text>
                </View>
            </View>
            <Activities id={itinerary._id} />
            <View style={styles.containerIterations}>
                <Likes itinerary={itinerary} />
                <View style={{ height: 30 }}>
                    <TouchableHighlight
                        onPress={() => setButtonState(!buttonState)}
                    >
                        <View style={styles.button}>
                            <Text style={{ color: 'aliceblue' }}>Comments</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            {
                buttonState && <DisplayComments itinerary={itinerary} />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    containerItinerary: {
        flex: 1,
        width: width * 0.80,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    img: {
        width: 44,
        height: 44,
        borderRadius: 100,
        marginEnd: 5
    },
    containerUser: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    containerInformation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    icon: {
        width: 20,
        height: 20
    },
    containerTags: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerTagsPrice: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: "#5C98FF",
        padding: 6,
        borderRadius: 4,
        height: '100%'
    },
    containerIterations: {
        flex: 1,
        width: '100%',
        marginTop: 10,
        backgroundColor: '#ebf1ff',
        borderRadius: 10,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 70
    }
})