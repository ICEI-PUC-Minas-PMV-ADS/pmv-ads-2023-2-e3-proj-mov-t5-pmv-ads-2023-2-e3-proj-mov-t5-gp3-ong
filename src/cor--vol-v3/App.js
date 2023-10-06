import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import styles from './components/Pages/Main';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



// You can import supported modules from npm
import 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

import Main from './components/Pages/Main';
import Home from "./components/Pages/Home";
import Login from './components/Pages/Login';
import Cadastro from './components/Pages/Cadastro';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Main/>
      </Card>
    </SafeAreaView>,

    <NavigationContainer>
      <Login />
      <Main />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
          
      </Stack.Navigator>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Voluntários" component={Home} />
          <Tab.Screen name="ONGs" component={Home} />
          <Tab.Screen name="Vagas" component={Home} />
          <Tab.Screen name="Sair" component={Home} />
        </Tab.Navigator>
    );
  }
}

