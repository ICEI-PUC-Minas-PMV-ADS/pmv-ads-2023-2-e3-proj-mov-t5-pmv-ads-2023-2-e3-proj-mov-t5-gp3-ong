import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ongs from './Ongs';
import Volunteers from './Voluntários';
import Vagas from './Vagas';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Ongs></Ongs>
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
      <Vagas />
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
        name=" ONGs" 
        component={Feed}
        options={{
          tabBarLabel: 'ONGs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bank" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name=" Voluntários"
        component={Volunteers}
        options={{
          tabBarLabel: 'Voluntários',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="charity" color={color} size={size} />
          ),
          
        }}
      />
      
      <Tab.Screen
        name=" Vagas"
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
