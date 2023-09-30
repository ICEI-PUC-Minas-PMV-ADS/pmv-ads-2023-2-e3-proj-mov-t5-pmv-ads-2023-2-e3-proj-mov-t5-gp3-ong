import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import styles from './src/components/styles';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Main from './src/navigations/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Main/>
      </Card>
    </SafeAreaView>
  );
}



