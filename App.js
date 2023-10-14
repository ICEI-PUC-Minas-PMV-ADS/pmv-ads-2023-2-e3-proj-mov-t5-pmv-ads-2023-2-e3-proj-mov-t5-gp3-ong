import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Pages/Login';
import Main from './Components/Pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import CadastroUsuario from './components/Pages/CadastroUsuario';


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



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}




  
  
  
  
    


