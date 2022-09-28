import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import { useLikeDislikeMutation } from '../features/itinerariesAPI';
import { useDispatch, useSelector } from "react-redux";
import { reload } from "../features/reloadSlice";
export default function Likes(props) {
    const [likeDislike] = useLikeDislikeMutation()
    const itinerary = props.itinerary
    const user = useSelector((state) => state.logged.user)
    const dispatch = useDispatch()
    async function likes() {
        if (localStorage.getItem('token')) {
            try {
                let res = await likeDislike(itinerary._id)
                if (res.data?.success) {
                    dispatch(reload())
                } else {
                    console.log(res.error)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <View style={styles.interactionsLikes}>
            <TouchableHighlight
                onPress={likes}>
                <View style={{height: '100%'}}>
                    <Image style={styles.icon} source={((user && itinerary.likes.includes(user.id)) || !user) ? require('../../assets/heart.png') : require('../../assets/love.png')} />
                </View>
            </TouchableHighlight>
            <Text style={styles.text}>{itinerary.likes.length}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    interactionsLikes: {
        flex: 1,
        height: 25,
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25
    },
    text: {
        marginTop: 3,
        marginStart: 4
    }
})