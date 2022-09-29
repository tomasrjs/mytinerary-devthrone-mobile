import React from 'react'
import store from './src/features/store'
import { Provider } from 'react-redux'
import AppIndex from './AppIndex'
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppIndex />
            </NavigationContainer>
        </Provider>
    )
}
export default App