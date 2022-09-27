import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ImageBackground, Button, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Welcome() {
  const image = { uri: "https://i.ibb.co/dDTtRKP/6345959.jpg" };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerText}>
          <Text style={styles.title}>MyTinerary</Text>
          <Text style={styles.text}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </Text>
          <Button title="Choose your destiny" color='#0a5cff' />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    flex: 1,
    paddingHorizontal: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#3F3D56",
    fontSize: 35,
    fontWeight: "bold",
  },
  text: {
    color: "#3F3D56",
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
