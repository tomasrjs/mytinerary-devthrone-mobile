import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const AccountScreen = () => {
  const user = useSelector((state) => state.logged.user);
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Image style={styles.photo} source={{ uri: user?.photo }} resizeMode="cover" />
        <Text style={styles.name}>{user?.name} {user?.lastName}</Text>
        <Text style={styles.text}>{user?.mail}</Text>
        <Text style={styles.text}><Image style={styles.icon} resizeMode="cover" source={require('../../assets/ubicacion.png')}/> {user?.country}</Text>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: width,
    minHeight: height,
    padding: 40,
    backgroundColor: "#ebf1ff",
  },
  containerInfo: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 40,
    backgroundColor: 'aliceblue',
    borderRadius: 15,
    marginTop: 200,
    shadowColor: '#595959',
    elevation: 13,
  },
  photo: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 50
  },
  name: {
    fontSize: 18,
    color: '#3f3d56',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#3f3d56',
    marginTop: 10
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center'
  }
});
