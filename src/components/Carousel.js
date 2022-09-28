import React, { useRef } from 'react'
import { View, StyleSheet, Text, Dimensions, Image, Animated } from "react-native";
import { useGetAllCitiesQuery } from '../features/citiesAPI';

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Carousel() {
  const scrollX = useRef(new Animated.Value(0)).current
  const { data } = useGetAllCitiesQuery('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular MyTineraries</Text>
      <View style={styles.carouselContainer}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          data={data?.response.slice(0, 12)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 200, marginHorizontal:(width - width*0.7)/2 }}
          decelerationRate={0}
          snapToInterval={width * 0.7}
          scrollEventThrottle={16}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width * 0.7,
              index * width * 0.7,
              (index + 1) * width * 0.7
            ]
            const outputRange = [0, -90, 0]
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange
            })
            return (
              <View style={styles.viewCard}>
                <Animated.View style={{
                  marginHorizontal: 10,
                  padding: 10,
                  borderRadius: 20,
                  alignItems: 'center',
                  transform: [{translateY}]
                }}>
                  <Text style={styles.textCard}>{item.city}</Text>
                  <Image source={{ uri:item.photo }} style={styles.imageCard} />
                </Animated.View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height *0.88,
    width: width,
    backgroundColor: "#ebf1ff",
    alignItems: "center",
  },
  title: {
    color: "#3F3D56",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 24
  },
  carouselContainer: {
    width: width,
    height: height * 0.75
  },
  viewCard: {
    width: width * 0.7,
    height: height * 0.45,
  },
  textCard:{
    color: "#3F3D56",
    fontSize: 20,
    padding: 5
  },
  imageCard: {
    width: "100%",
    height: "95%",
    resizeMode: "cover",
    borderRadius: 20,
    margin: 0,
    marginBottom: 10
  }
})