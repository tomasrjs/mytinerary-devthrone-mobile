import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Welcome() {
  const navigation = useNavigation()
  const image = { uri: "https://i.ibb.co/dDTtRKP/6345959.jpg" };
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.containerText}>
          <Text style={styles.title}>MyTinerary</Text>
          <Text style={styles.text}>
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("CitiesScreen")
          }}>
            <View style={styles.button}>
              <Text style={{ color: 'aliceblue' }}>Choose your destiny</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height *0.88,
    width: width,
    alignItems: "center",
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
  button: {
    alignItems: "center",
    backgroundColor: "#0a5cff",
    padding: 6,
    borderRadius: 4,

  },
});
