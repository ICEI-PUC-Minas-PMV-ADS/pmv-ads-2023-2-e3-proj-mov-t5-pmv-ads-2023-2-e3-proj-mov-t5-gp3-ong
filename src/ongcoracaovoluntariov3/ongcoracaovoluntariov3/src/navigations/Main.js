import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../Pages/Login';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>,

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Home}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
