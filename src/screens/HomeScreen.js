import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from '../components/Welcome';
import Carousel from '../components/Carousel';

export default function HomeScreen() {
  return (
        <ScrollView>
            <Welcome />
            <Carousel />
        </ScrollView>

  )
}
