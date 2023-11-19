import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Logo from '../../assets/LogoONG.png';
import axios from 'axios';

const Vagas = () => {
  
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newJob, setNewJob] = useState({
    ONG: '',
    cargo: '',
    telefone: '',
    local: '',
  });

  useEffect(() => {
    // Carregar dados do servidor ao montar o componente
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Realizar uma requisição GET para obter as vagas do servidor
      const response = await axios.get('http://localhost:3001/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Erro ao obter dados do servidor:', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addVaga = async () => {
    try {
      // Realizar uma requisição POST para adicionar uma nova vaga
      await axios.post('http://localhost:3001/jobs', newJob);
      // Atualizar os dados após adicionar uma vaga
      fetchData();
      setNewJob({ ONG: '', cargo: '', telefone: '', local: '' });
      toggleModal();
    } catch (error) {
      console.error('Erro ao adicionar vaga:', error);
    }
  };

  const deleteVaga = async (vagaId) => {
    try {
      // Realizar uma requisição DELETE para excluir uma vaga
      await axios.delete(`http://localhost:3001/jobs/${vagaId}`);
      // Atualizar os dados após excluir uma vaga
      fetchData();
    } catch (error) {
      console.error('Erro ao excluir vaga:', error);
    }
    setJobs((prevJobs) => prevJobs.filter(job => job.id !== vagaId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.anuncio}>
    <Text style={[styles.title, { fontSize: 18 }]}>
      <Text style={{ fontWeight: 'bold' }}>Vaga:</Text>{item.cargo}
    </Text>
    <Text style={[styles.title, { fontSize: 18 }]}>
      <Text style={{ fontWeight: 'bold' }}>{item.ONG} </Text>
    </Text>
    <Text style={[styles.title, { fontSize: 18 }]}>
      <Text style={{ fontWeight: 'bold' }}>Telefone:</Text> {item.telefone}
    </Text>
    <Text style={[styles.title, { fontSize: 18 }]}>
      <Text style={{ fontWeight: 'bold' }}>Local:</Text> {item.local}
    </Text>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deleteVaga(item.id)}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>Excluir Vaga</Text>
    </TouchableOpacity>
  </View>
  );

  return (
    <View style={styles.principal}>
      <View>
        <img style={styles.Imagem} src={Logo}/>
      </View>
      
      <TextInput
        style={{ fontSize:15, marginTop:20, marginBottom:20, height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Pesquisar Vagas"
        onChangeText={text => setSearch(text)}
        value={search}
      />

      <FlatList style={{marginTop:20}}
        data={jobs.filter(job =>
          job.ONG.toLowerCase().includes(search.toLowerCase()) ||
          job.cargo.toLowerCase().includes(search.toLowerCase()) ||
          job.local.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      
      <Button style={[styles.button, specifStyle.button]} title="Criar Vaga" onPress={toggleModal} />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={toggleModal}
      >
        <View style={styles.secundaria}>

          <img style={styles.Imagem} src={Logo}/>

          
            <Text style={styles.formulario}>Nome da Instituição:</Text>
            <TextInput style={styles.textForm}
              value={newJob.ONG}
              onChangeText={text => setNewJob({ ...newJob, ONG: text })}
            />

            <Text style={styles.formulario}>Vaga:</Text>
            <TextInput style={styles.textForm}
              value={newJob.cargo}
              onChangeText={text => setNewJob({ ...newJob, cargo: text })}
            />

            <Text style={styles.formulario}>Telefone:</Text>
            <TextInput style={styles.textForm}
              value={newJob.telefone}
              onChangeText={text => setNewJob({ ...newJob, telefone: text })}
              inputMode='tel'
            />

            <Text style={styles.formulario}>Local:</Text>
            <TextInput style={styles.textForm}
              value={newJob.local}
              onChangeText={text => setNewJob({ ...newJob, local: text })}
            />
          

          <Button style={[styles.button, specifStyle.button]} title="Salvar Vaga" onPress={addVaga} />
          <Button style={[styles.button, specifStyle.button]} title="Cancelar" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Vagas;


const styles = StyleSheet.create({
  
  deleteButton:{
    backgroundColor: 'red', // Altere a cor de fundo conforme necessário
    padding: 5,
    borderRadius: 5,
    marginLeft: 'auto',
    marginBottom: 5,
  },

  Imagem: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 60,
    marginTop: 30,
  },

  formulario:{
    fontSize: 19,
    fontWeight: 'bold',
    padding:7,
  },

  principal:{
    width:'90%'
  },

  
  textForm:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 10, 
    fontSize: 15,
    
  }
})

const specifStyle = StyleSheet.create({
  button:{
    width: '60%',
    alignSelf:'center',
    marginTop:20,
    borderRadius: 35,
    marginBottom:5,
  },
})
