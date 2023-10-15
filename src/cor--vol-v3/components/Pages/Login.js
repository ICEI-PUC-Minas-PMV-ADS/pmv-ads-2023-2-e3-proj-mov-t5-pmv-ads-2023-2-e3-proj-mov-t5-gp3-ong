import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Button, Input, keyboardType} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/Styles';
import CadastroUsuario from './CadastroUsuario';
import { Platform } from 'react-native';


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

      
      
      
      <Text style={[styles.paragraph, specifStyle.paragraph]}>Coração Voluntário</Text>

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
      <View> 
        <Button
            icon={
              <Icon
              name='check'
              size={15}
              color='white'
          />
        }
            title=' Entrar'
            buttonStyle={specifStyle.button}
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
            buttonStyle={specifStyle.button}
            onPress={() => cadastrar()}
          />
      </View>
    </View>
  ) 
}

const specifStyle = StyleSheet.create({
    paragraph: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
    button: {
    marginTop:10,
    width:'100%',    
  },
})


  
  
  
  
    


