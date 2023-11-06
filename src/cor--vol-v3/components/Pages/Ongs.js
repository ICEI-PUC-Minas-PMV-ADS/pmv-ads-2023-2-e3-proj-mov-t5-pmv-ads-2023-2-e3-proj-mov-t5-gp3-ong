import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: 1,
    nome: 'Missao el Pallet',
    site: 'www.missaoelpallet.com.br',
    telefone: '123456789',
    email: 'missao@missaoelpallet.com.br',
    descricao: 'Descrição da ONG 1...',
    imagem: 'https://via.placeholder.com/150',

  },
  {
    id: 2,
    nome: 'ONG 2',
    site: 'www.ong2.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 2...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 3,
    nome: 'ONG 3',
    site: 'www.ong3.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 3...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 4,
    nome: 'ONG 4',
    site: 'www.ong4.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 4...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 5,
    nome: 'ONG 5',
    site: 'www.ong5.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 5...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 6,
    nome: 'ONG 6',
    site: 'www.ong4.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 6...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 7,
    nome: 'ONG 7',
    site: 'www.ong5.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 7...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 8,
    nome: 'ONG 8',
    site: 'www.ong4.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 8...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  }, {
    id: 9,
    nome: 'ONG 9',
    site: 'www.ong5.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 9...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
    
  },
  {
    id: 10,
    nome: 'ONG 10',
    site: 'www.ong4.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Descrição da ONG 10...',
    imagem: 'https://via.placeholder.com/150', // URL da imagem da ONG
  },
  // Adicione mais dados conforme necessário
];

const OngCard = ({ ong }) => (
  <View style={styles.card}>
    <Image source={{ uri: ong.imagem }} style={styles.imagem} />
    <Text style={styles.nome}>{ong.nome}</Text>
    <Text>{ong.site}</Text>
    <Text>{ong.telefone}</Text>
    <Text>{ong.email}</Text>
    <Text>{ong.descricao}</Text>
  </View>
);

const Ongs = () => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <OngCard ong={item} />}
      columnWrapperStyle={styles.row}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Ongs;
