import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OngDetails = ({ route }) => {
  const navigation = useNavigation();
  const ong = route.params.ong;
  const [activeSection, setActiveSection] = useState(null); // Estado para controlar a seção ativa

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <View style={styles.container}>
      <Image source={ong.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{ong.nome}</Text>
      <Text style={styles.text}>{ong.descricao}</Text>

      {/* Botões para alternar entre Contato e Vagas */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeSection === 'contato' && styles.activeButton]}
          onPress={() => handleSectionChange('contato')}
        >
          <Text style={styles.buttonText}>Contato</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeSection === 'vagas' && styles.activeButton]}
          onPress={() => handleSectionChange('vagas')}
        >
          <Text style={styles.buttonText}>Vagas</Text>
        </TouchableOpacity>
      </View>

      {/* Exibindo informações de Contato ou Vagas, dependendo da seção ativa */}
      {activeSection === 'contato' && (
        <View style={styles.infoContainer}>
          {/* Informações de Contato aqui */}
          <Text style={styles.infoLabel}>Site:</Text>
          <Text style={styles.text}>{ong.site}</Text>

          <Text style={styles.infoLabel}>Telefone:</Text>
          <Text style={styles.text}>{ong.telefone}</Text>

          <Text style={styles.infoLabel}>E-mail:</Text>
          <Text style={styles.text}>{ong.email}</Text>
        </View>
      )}

      {activeSection === 'vagas' && (
        <View style={styles.vagasContainer}>
          <Text style={styles.sectionTitle}>Vagas Disponíveis</Text>
          {/* Lista de Vagas aqui */}
        </View>
      )}

      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 10,
  },
  nome: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    margin: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  button: {
    padding: 12,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    marginTop: 20,
    width: '80%',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  vagasContainer: {
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default OngDetails;
