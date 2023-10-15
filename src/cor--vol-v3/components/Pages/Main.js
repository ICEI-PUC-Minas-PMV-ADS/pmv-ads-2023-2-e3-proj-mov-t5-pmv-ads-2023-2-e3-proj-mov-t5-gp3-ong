import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações ONGs!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações Cadastro!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações Voluntários!</Text>
    </View>
  );
}

function Jobs() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações Vagas!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Tela ONGs" 
        component={Feed}
        options={{
          tabBarLabel: 'ONGs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tela Voluntários"
        component={Notifications}
        options={{
          tabBarLabel: 'Voluntários',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="charity" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tela Cadastro"
        component={Profile}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-edit-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tela Vagas"
        component={Jobs}
        options={{
          tabBarLabel: 'Vagas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bullhorn" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
