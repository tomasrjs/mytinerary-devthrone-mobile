import {Provider} from 'react-redux'
import store from './src/features/store'
import Tabs from './src/navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </Provider>
  );
}