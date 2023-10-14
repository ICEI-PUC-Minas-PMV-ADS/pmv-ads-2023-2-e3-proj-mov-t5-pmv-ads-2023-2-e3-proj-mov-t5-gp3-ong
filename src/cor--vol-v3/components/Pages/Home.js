import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import UserProfile from './OngProfile';

export default function Home() {
  const users = [
    {
      name: 'Ong 1',
      phoneNumber: '123-456-7890',
      email: 'ong1@email.com',
      image: 'URL_DA_IMAGEM_1',
      description: 'Descrição da Ong 1',
    },
    {
      name: 'Ong 2',
      phoneNumber: '987-654-3210',
      email: 'ong2@email.com',
      image: 'URL_DA_IMAGEM_2',
      description: 'Descrição da Ong 2',
    },
    {
      name: 'Ong 3',
      phoneNumber: '123-456-7890',
      email: 'ong1@email.com',
      image: 'URL_DA_IMAGEM_3',
      description: 'Descrição da Ong 3',
    },
    {
      name: 'Ong 4',
      phoneNumber: '987-654-3210',
      email: 'ong2@email.com',
      image: 'URL_DA_IMAGEM_4',
      description: 'Descrição da Ong 4',
    },
    // Adicione mais objetos de ONG conforme necessário
  ];

  const banners = [
    {
      title: 'Banner 1',
      image: require('../../assets/LogoONG.png'),
    },
    {
      title: 'Banner 2',
      image: 'URL_DA_IMAGEM_2',
    },
    {
      title: 'Banner 3',
      image: 'URL_DA_IMAGEM_3',
    },
    {
      title: 'Banner 4',
      image: 'URL_DA_IMAGEM_4',
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.bannerContainer}>
        <Image source={item.image} style={styles.bannerImage} />
        <Text style={styles.bannerTitle}>{item.title}</Text>
      </View>
    );
  };

  function chunks(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  return (
    <View style={styles.container}>
      {chunks(users, 2).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((user, userIndex) => (
            <View key={userIndex} style={styles.userContainer}>
              <UserProfile user={user} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    // Espaçamento horizontal para margens
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16, // Espaçamento vertical entre as linhas
  },
  userContainer: {
    flex: 1, // Cada perfil ocupa igualmente o espaço disponível
    marginRight: 8, // Espaçamento horizontal entre os perfis
  },
  bannerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  bannerImage: {
    width: '100%',
    height: 150, // Altura do banner
  },
  bannerTitle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
});
