import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import styles from './Styles.js/syles';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Login from './components/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Login />
      </Card>
      <Text style={styles.paragraph}>
        Seja bem vindo!
      </Text>
    </SafeAreaView>
  );
}



