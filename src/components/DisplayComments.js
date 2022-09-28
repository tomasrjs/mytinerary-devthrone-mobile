import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import Comments from './Comments'
export default function DisplayComments(props) {
    let user = useSelector((state) => state.logged.user)
  return (
    <View style={styles.containerDisplay}>
      <Comments itinerary={props.itinerary._id} />
            {/* {
                user && <NewComment itinerary={props.itinerary._id} />
            } */}
    </View>
  )
}
const styles = StyleSheet.create({
    containerDisplay:{
        width: '100%',
        marginTop: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})