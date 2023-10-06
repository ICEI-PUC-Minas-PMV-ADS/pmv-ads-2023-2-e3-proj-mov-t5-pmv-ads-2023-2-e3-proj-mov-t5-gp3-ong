import { Text, View, StyleSheet, Image } from 'react-native';
import {Input,Button} from 'react-native-elements';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UseNavigation} from '@react-navigation/native';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPasword] = useState(null)

  const entrar = () => {
    navigation.reset({
      idex: 0,
      routes:[{name:'Main'}]
    })
  }

  
   return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../../assets/LogoONG.png')} />
      </View>
      
        <Text style={styles.paragraph}>
          CORAÇÃO VOLUNTÁRIO
        </Text>

        <View style={styles.form}> 
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
        </View>

         
          <Button buttonStyle={styles.button}
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

          <Button
              icon={
                <Icon
                name='user'
                size={15}
                color='white'
                />
            }
            title=' Cadastrar'
            buttonStyle={styles.button}
            onPress={() => cadastrar()}
          />

        
        <Text style={styles.welcome}>
          Seja bem vindo! 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'#ecf0f1',    
  },
  paragraph: { 
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'blue',
  },
  logo: {
    height: 150,
    width: 150,
    margin:50, 
    
  },
  form: {
    height: 200,
    width:300,
       
  },
  button: {
    marginTop:10,
    width:200,
  },
  welcome:{
    fontSize:18,
    margin:30,
  }
});

