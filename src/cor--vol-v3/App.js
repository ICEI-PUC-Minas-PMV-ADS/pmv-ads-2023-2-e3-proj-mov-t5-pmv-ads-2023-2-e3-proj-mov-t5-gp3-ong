
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< Updated upstream
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
=======
import Login from './Pages/Login';
import Main from './Pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import CadastroUsuario from './Pages/CadastroUsuario';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
    </Stack.Navigator>
  );
}
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
=======







>>>>>>> Stashed changes

