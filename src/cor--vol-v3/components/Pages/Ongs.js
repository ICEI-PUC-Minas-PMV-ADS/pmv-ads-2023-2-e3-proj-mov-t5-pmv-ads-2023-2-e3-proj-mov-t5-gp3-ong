import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 1,
    nome: 'Missao el Pallet',
    site: 'www.missaoelpallet.com.br',
    telefone: '123456789',
    email: 'missao@missaoelpallet.com.br',
    descricao: 'Somos uma ONG com objetivo de semear a boa semente e cremos que todos podem ter uma segunda chance. Nosso objetivo é transformar! N﻿ascemos no primeiro dia da Pandemia com marmitas solidaria para moradores em situação de rua da comunidade do sape e regão. Com passar do tempo conseguimos um espaço que além de distribuirmos marmitas, distribuimos 400 cestas basicas no mês, legumes semanal para 70 familias, temos oficina de gastronomia social para crianças e adolescentes na idade de 7 a 18 anos, inglês aos sabados, farmacia solidária, medico 1x por mês e atendimento psicologico 2x ao mês ',
    imagem: require('../../assets/ongs_img/ong1.jpg'),
    endereco: 'Sâo Paulo, SP',


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
    nome: 'Instituto Vale do Sol',
    site: 'https://www.facebook.com/@valedosolmaceio',
    telefone: '123456789',
    email: 'valedosolmaceio@gmail.com',
    descricao: 'O Instituto Vale do Sol é uma OSCIP que aproxima a preservação dos direitos humanos e a preservação ambiental, proporciona atividades de acesso a direitos.',
    imagem: require('../../assets/ongs_img/ong7.jpg'),

  },
  {
    id: 8,
    nome: 'One by One',
    site: 'https://onebyone.org.br/site/#quemsomos',
    telefone: '123456789',
    email: 'comunicacao@onebyone.org.br',
    descricao: 'A missão da One by One é proporcionar inclusão social para famílias com crianças com deficiência física, motora ou neurológica e em vulnerabilidade social.',
    imagem: require('../../assets/ongs_img/ong8.jpg'),

  }, {
    id: 9,
    nome: 'Indimap.org',
    site: 'https://indimap.org',
    telefone: '123456789',
    email: 'mariofraga@gmail.com',
    descricao: 'O Indimap é uma aplicação que utiliza dados geoespaciais para monitorar e divulgar em tempo real ilícitos ambientais em terras indígenas brasileiras.',
    imagem: require('../../assets/ongs_img/ong9.png'),

  },
  {
    id: 10,
    nome: 'Anjos da Leste',
    site: 'https://www.anjosdaleste.org.br',
    telefone: '123456789',
    email: 'anjosdaleste@gmail.com',
    descricao: 'Somos uma ONG cuja finalidade é promover a assist. social, voluntáriado, solidariedade, dignidade, através de projetos voltados às pessoas em vulnerabilidade',
    imagem: require('../../assets/ongs_img/ong10.jpg'),
  },
  // Adicione mais dados conforme necessário
];

const OngCard = ({ ong, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress(ong);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, isPressed && { backgroundColor: 'lightgrey' }]}>
        <Image source={ong.imagem} style={styles.imagem} />
        <Text style={styles.nome}>
          {ong.nome}
        </Text>
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
    </TouchableOpacity>
  );
};


const Ongs = () => {
  const navigation = useNavigation();

  const navigateToOngDetails = (ong) => {
    navigation.navigate('OngDetails', { ong });
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (<OngCard ong={item} onPress={navigateToOngDetails} />)}
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