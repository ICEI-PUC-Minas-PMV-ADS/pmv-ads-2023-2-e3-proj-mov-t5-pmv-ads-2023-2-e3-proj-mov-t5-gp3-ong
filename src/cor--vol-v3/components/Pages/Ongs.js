import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: 1,
    nome: 'Missao el Pallet',
    site: 'www.missaoelpallet.com.br',
    telefone: '123456789',
    email: 'missao@missaoelpallet.com.br',
    descricao: 'Somos uma ONG com objetivo de semear a boa semente e cremos que todos podem ter uma segunda chance. Nosso objetivo é transformar!',
    imagem: require('../../assets/ongs_img/ong1.jpg'),

  },
  {
    id: 2,
    nome: 'IDC 3º Milênio',
    site: 'idcterceiromilenio.org/',
    telefone: '123456789',
    email: 'idc3milenio@gmail.com',
    descricao: 'O Serviço de Acolhimento institucional para Crianças e Adolescentes (SAICA ) é um serviço de proteção social especial de alta complexidade.',
    imagem: require('../../assets/ongs_img/ong2.png'), // URL da imagem da ONG
    
  },
  {
    id: 3,
    nome: 'Dia de Doar Floripa',
    site: 'www.ong3.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'DOrganizações Sociais de Floripa, juntas, despertando a generosidade dos moradores da Ilha da Magia, celebrando o prazer que é doar. Escolha sua causa!',
    imagem: require('../../assets/ongs_img/ong3.jpg'), // URL da imagem da ONG
    
  },
  {
    id: 4,
    nome: 'Espaço Cultural Nova Bonsucesso',
    site: 'diadedoar.floripa.br/',
    telefone: '123456789',
    email: 'contato@compradobem.com.br',
    descricao: 'A ONG oferece atendimento à famílias em vulnerabilidade e extrema vulnerabilidade social.',
    imagem: require('../../assets/ongs_img/ong4.jpg'), // URL da imagem da ONG
    
  },
  {
    id: 5,
    nome: 'Mansão Animalão',
    site: 'www.ong5.com',
    telefone: '123456789',
    email: 'ong1@email.com',
    descricao: 'Somos um grupo de pessoas dedicadas à causa animal! Atuamos atualmente nas frentes de conscientização e vamos iniciar em breve alguns resgates.',
    imagem: require('../../assets/ongs_img/ong5.jpg'), // URL da imagem da ONG
    
  },
  {
    id: 6,
    nome: 'Semeando Amor',
    site: 'www.ong4.com',
    telefone: '123456789',
    email: 'institutosemeandoamor@gmail.com',
    descricao: 'Estamos presentes na Comunidade Cesar Maia há quase 20 anos. Disponibilizamos aulas de reforço escolar e atividades culturais para jovens de 7 a 16 anos.',
    imagem: require('../../assets/ongs_img/ong6.jpg'),// URL da imagem da ONG
    
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
