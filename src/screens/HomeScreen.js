import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';
import Welcome from '../components/Welcome';
import Carousel from '../components/Carousel';

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </View>
  )
}
