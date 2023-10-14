
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// You can import supported modules from npm
import 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

import Main from './components/Pages/Main';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

