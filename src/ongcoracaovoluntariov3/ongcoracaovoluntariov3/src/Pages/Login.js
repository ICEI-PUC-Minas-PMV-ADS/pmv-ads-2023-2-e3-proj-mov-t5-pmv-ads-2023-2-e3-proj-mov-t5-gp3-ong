import { Text, View, StyleSheet,KeyboardAvoidingView, TouchableWithoutFeedback,TextInput, Image } from 'react-native';
import {Input,Button} from 'react-native-elements';
import {useState} from 'react';
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
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../../src/assets/LogoONG.png')} />
      </View>
      
        <Text style={styles.paragraph}>
          CORAÇÃO VOLUNTÁRIO
        </Text>

        <View style={styles.formcontainer}>  
          <Input
            placeholder='E-mail'
            leftIcon={{type:'font-awesome', name:'envelope'}}
            ChangeText={value => setEmail(value)}
            keyboardType='email-address'
          />
          <Input
            placeholder='Senha'
            leftIcon={{type:'font-awesome', name:'lock'}}
            ChangeText={value => setPasword(value)}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttoncontainer}> 
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
        <Text style={styles.welcome}>
          Seja bem vindo! 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor:'#ecf0f1',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'blue'
  },
  logo: {
    height: 150,
    width: 150,
    margin:110,
  },
  formcontainer: {
    width:330,
    height:100,
  },
  buttoncontainer: {
    margin:60,
  },
  welcome:{
    fontSize:18,
  }
});

