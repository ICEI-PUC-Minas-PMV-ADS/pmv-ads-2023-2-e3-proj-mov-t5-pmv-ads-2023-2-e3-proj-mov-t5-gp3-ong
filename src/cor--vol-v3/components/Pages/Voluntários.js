import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: 1,
    nome: 'Marcos Paulo',
    telefone: '123456789',
    email: 'marcospaulo@gmail.com',
    descricao: 'Estou disponível para ajudar no que estiver ao meu alcançe, sou da região de Betim - MG',
    imagem: require('../../assets/volunts_img/marcos.PNG'),
    endereco: 'Betim - MG',
    

  },
  {
    id: 2,
    nome: 'Silmara Barbosa',
    telefone: '123456789',
    email: 'silmarabarbosa@gmail.com',
    descricao: 'Devemos fazer o bem sem olhar a quem, o dever de contribuir é o que me motiva a continuar.',
    imagem: require('../../assets/volunts_img/silmara.PNG'), 

  },
  {
    id: 3,
    nome: 'Leandro',
    telefone: '123456789',
    email: 'leandro@gmail.com',
    descricao: 'Contribuir e criar um mundo melhor é o que precisamos!',
    imagem: require('../../assets/volunts_img/leandro.PNG'), 

  },
  {
    id: 4,
    nome: 'Janaina Barbosa',
    telefone: '123456789',
    email: 'janabarbosa@gmail.com',
    descricao: 'Os animais são um dos nossos bens mais preciosos, não maltrate!.',
    imagem: require('../../assets/volunts_img/janaina.PNG'),

  },
  {
    id: 5,
    nome: 'Silvestre Castro',
    telefone: '123456789',
    email: 'silvestrecastro@gmail.com',
    descricao: 'Cuide do presente, respeite o passado. Seja um voluntário na assistência aos idosos.',
    imagem: require('../../assets/volunts_img/silvestre.PNG'),

  },
  {
    id: 6,
    nome: 'Ramon',
    telefone: '123456789',
    email: 'ramon@gmail.com',
    descricao: 'Preservar hoje para prosperar amanhã, cuide do meio ambiente!.',
    imagem: require('../../assets/volunts_img/ramon.PNG'),

  },
  
];

const OngCard = ({ ong }) => (
  <View style={styles.card}>
    <Image source={ong.imagem} style={styles.imagem} />
    <Text style={styles.nome}>{ong.nome}</Text>
    <Text numberOfLines={1} style={styles.text}>
      {ong.site}
    </Text>
    <Text numberOfLines={1} style={styles.text}>
      {ong.telefone}
    </Text>
    <Text numberOfLines={1} style={styles.text}>
      {ong.email}
    </Text>
    <Text numberOfLines={3} style={styles.text}>
      {ong.descricao}
    </Text>
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
    width: 165, // Ajuste a largura conforme necessário
    height: 250, // Ajuste a altura conforme necessário
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  nome: {
    fontSize: 15, // Ajuste o tamanho conforme necessário
    fontWeight: 'bold',
    marginBottom: 3,
    textAlign: 'center',
  },
  text: {
    fontSize: 11, // Ajuste o tamanho conforme necessário
    textAlign: 'center',
  },
});

export default Ongs;
