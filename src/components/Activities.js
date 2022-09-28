import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { useGetActivitiesQuery } from '../features/activitiesAPI'
const width = Dimensions.get("window").width
export default function Activities(props) {
    const { data } = useGetActivitiesQuery(props.id)
    const showActivity = (activity) => (
        <View style={styles.activity} key={Math.random().toString(12).substring(0)}>
            <Text style={styles.title}>{activity?.name}</Text>
            <Image style={styles.img} resizeMode="cover" source={{ uri: activity?.photo }} />
        </View>
    )
    return (
        <View style={styles.container}>
            {
                data?.response.map(showActivity)
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 10
    },
    activity: {
        width: '100%',
        marginBottom: 10,
        height: 200,
        borderRadius: 10,
    },
    title: {
        width: '100%',
        color: 'aliceblue',
        textAlign: 'center',
        backgroundColor: '#00000093',
        padding: 10,
        fontWeight: 'bold',
        position: 'absolute',
        zIndex: 1,
        borderRadius: 10,
    },
    img: {
        borderRadius: 10,
        width: '100%',
        height: '100%'
    },
})