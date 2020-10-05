import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from './context/BlogContext';


const navigator = createStackNavigator({
  Home: HomeScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Name Generator'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App /> 
  </Provider>
};