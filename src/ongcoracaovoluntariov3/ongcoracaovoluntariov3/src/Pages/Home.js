
import { Text, View, StyleSheet,KeyboardAvoidingView, TouchableWithoutFeedback,TextInput, Image } from 'react-native';
import {useState} from 'react';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo} source={require('../../src/assets/LogoONG.png')}/>
      </View>
      <Text style={styles.paragraph}>CORAÇÃO</Text>
    </View>
  );
}
