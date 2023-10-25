import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, keyboardType} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../Styles.js/styles';
import Logo from '../../assets/LogoONG.png';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPasword] = useState(null)

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes:[{name:"Main"}]
    })
  }

  const cadastrar = () => {
    navigation.navigate('CadastroUsuario') 
  } 

  return (
    <View style={styles.container}>

      <img style={styles.Imagem} src={Logo}/>
           
      <Text style={[styles.paragraph, specifStyle.paragraph]}>Coração Voluntário</Text>

      <Input
        placeholder='E-mail'
        leftIcon={{type:'font-awesome', name:'envelope'}}
        onChangeText={value => setEmail(value)}
        style={[styles.input, specifStyle.input]}
        keyboardType='email-address'
      />

      <Input
        placeholder='Senha'
        leftIcon={{type:'font-awesome', name:'lock'}}
        onChangeText={value => setPasword(value)}
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={[styles.button, specifStyle.button]}> 
        <Button
            icon={
              <Icon
              name='check'
              size={15}
              color='white'
          />
        }
            title=' Entrar'
            onPress={() => entrar()}
          />

          <Button
            icon={
              <Icon
              name='user'
              size={15}
              color='white'
              />
            }
            title=' Cadastrar'
            onPress={() => cadastrar()}
          />
      </View>
      
      <Text style={[styles.welcome, specifStyle.welcome]}>Seja bem-vindo!</Text>
      
    </View>
  ) 
}

const specifStyle = StyleSheet.create({
    paragraph: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
    padding: 50,
  },

  button:{
    width: '60%',
    alignSelf:'center',
    marginTop:40,
  },

  welcome: {
  fontSize: 24,
  textAlign: 'center',
  color:'black',
  padding: 60,
  },

  input: {
    
    padding: 15,
  }
})