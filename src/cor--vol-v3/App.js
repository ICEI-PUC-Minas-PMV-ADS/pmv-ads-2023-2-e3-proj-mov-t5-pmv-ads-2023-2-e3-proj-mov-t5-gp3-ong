import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Pages/Login';
import Main from './components/Pages/Main';
import CadastroUsuario from './components/Pages/CadastroUsuario';
import Vagas from './components/Pages/Vagas';

const Stack = createStackNavigator();

function MyStack() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="CadastroUsuario" component={CadastroUsuario}/>
      <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
      <Stack.Screen name="Vagas" component={Vagas} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

