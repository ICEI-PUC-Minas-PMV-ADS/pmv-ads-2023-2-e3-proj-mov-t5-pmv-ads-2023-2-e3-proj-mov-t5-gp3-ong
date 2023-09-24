import { Text, View, StyleSheet, Image } from 'react-native';
import {Input,Button} from 'react-native-elements';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {

  const {email, setEmail} = useState(null)
  const {password, setPasword} = useState(null)

  const entrar = () => {
    console.log('entrou')
    console.log(email)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LogoONG.png')} />
      <Text style={styles.paragraph}>
        CORAÇÃO VOLUNTÁRIO
      </Text>
      <Input
        placeholder='E-mail'
        leftIcon={{type:'font-awesome', name:'envelope'}}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />
      <Input
        placeholder='Senha'
        leftIcon={{type:'font-awesome', name:'lock'}}
        onChangeText={value => setPasword(value)}
        secureTextEntry={true}
      />
      <Button
          icon={
            <Icon
            name='check'
            size={15}
            color='white'
            />
        }
        title='Entrar'
        onPress={() => entrar()}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor:'#ecf0f1',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'blue'
  
  },
  logo: {
    height: 100,
    width: 100,
  }
});
