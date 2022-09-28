import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetCommentsMutation } from '../features/commentsAPI'
import Comment from './Comment'
export default function Comments(props) {
    const [comments, setComments] = React.useState([])
    const reload = useSelector((state) => state.reload.reloadState)
    const [getComments] = useGetCommentsMutation()
    async function allComments() {
        try {
            let res = await getComments(props.itinerary)
            if (res.data?.success) {
                setComments(res.data?.response)
            } else {
                console.log(res.error)
            }
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        allComments()
    }, [reload])
    return (
        <View style={styles.commentsContainer}>
            {
                comments.map((item) => <Comment key={item._id} comment={item} />)
            }
        </View>
    )
}
const styles = StyleSheet.create({
    commentsContainer:{
        width: '100%'
    }
})