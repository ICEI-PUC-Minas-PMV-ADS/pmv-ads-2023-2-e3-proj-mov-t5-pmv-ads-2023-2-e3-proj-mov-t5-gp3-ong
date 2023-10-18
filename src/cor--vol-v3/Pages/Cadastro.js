import { Text, View, StyleSheet, Image } from 'react-native';
import {Input,Button} from 'react-native-elements';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPasword] = useState(null)

  const entrar = () => {
    navigation.reset({
      idex: 0,
      routes:[{name:'Main'}]
    })
  }
  
  const cadastrar = () => {
    navigation.navigate('Cadastro')
  } 
 
   return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../../assets/LogoONG.png')} />
      </View>
      
        <Text style={styles.paragraph}>
          Cadastre-se
        </Text>

        <View style={styles.form}> 
          <Input
            placeholder='E-mail'
            leftIcon={{type:'font-awesome', name:'envelope'}}
            onChangeText={value => setEmail(value)}
            keyboardType='email-address'
            
          />
        </View>
        
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

const cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [campoSelecionado, setCampoSelecionado] = useState('Nome');

const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Campo Selecionado:', campoSelecionado);
    
  };


  return (
    <View style={styles.container}>
     <Image/>
    style={styles.imagem}

        <Text style={styles.titulo}>
            Cadastro de Usuário
        </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Picker
        selectedValue={tipoUsuario}
        onValueChange={(itemValue) => setTipoUsuario(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo" value="" />
        <Picker.Item label="ONG" value="ONG" />
        <Picker.Item label="Voluntário" value="Voluntario" />
      </Picker>

      <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'lightgray'
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 200,
    textAlign: 'center',
  },
  
  submitButton: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },

  imagem: {
    width: 100, 
    height: 100, 
    alignSelf: 'left', 
    marginBottom: 20, 
  },

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
})