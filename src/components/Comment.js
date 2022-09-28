import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Comment(props) {
    const comment = props.comment
    return (
        <View style={styles.containerComment}>
            <Image style={styles.img} source={{ uri: comment.user.photo }} resizeMode="cover" />
            <View style={styles.info}>
                <Text style={styles.name}>{comment.user.name} {comment.user.lastName}</Text>
                <Text style={styles.comment}>{comment.comment}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerComment: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#f0f8ff',
        marginBottom: 10,
        padding: 15,
        borderRadius: 10
    },
    img: {
        width: 35,
        height: 35,
        borderRadius: 50
    },
    info: {
        flex: 1,
        marginStart: 10
    },
    name: {
        fontWeight: '500'
    },
    comment: {
        marginTop: 10
    }
})