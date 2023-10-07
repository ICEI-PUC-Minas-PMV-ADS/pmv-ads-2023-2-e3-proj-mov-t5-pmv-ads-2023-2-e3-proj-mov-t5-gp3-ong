import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CadastroUsuario = () => {
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
      <Image
    source={require('../../assets/LogoONG.png')}
    style={styles.imagem}
  />

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
  }

})

export default CadastroUsuario;
