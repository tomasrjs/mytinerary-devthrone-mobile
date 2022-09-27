import { ScrollView } from 'react-native';
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
