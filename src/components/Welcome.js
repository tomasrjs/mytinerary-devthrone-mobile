import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ImageBackground, Button } from "react-native";

export default function Welcome() {
  const image = { uri: "https://i.ibb.co/dDTtRKP/6345959.jpg" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerText}>
          <Text style={styles.title}>MyTinerary</Text>
          <Text style={styles.text}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </Text>
          <Button title="Choose your destiny" color="#0a5cff"/>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 780,
    backgroundColor: "white",
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
