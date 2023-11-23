import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const OngCard = ({ ong }) => (
  <View style={styles.card}>
    <Image source={{ uri: ong.imagem }} style={styles.imagem} />
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
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/ongs')
      .then((response) => response.json())
      .then((data) => setOngs(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <FlatList
      data={ongs}
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
