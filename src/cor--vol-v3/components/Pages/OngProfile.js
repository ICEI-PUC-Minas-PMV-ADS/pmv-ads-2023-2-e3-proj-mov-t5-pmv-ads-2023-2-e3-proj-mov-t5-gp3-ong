import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OngProfile = ({ ong }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: ong.image }} style={styles.image} />
      <Text style={styles.name}>{ong.name}</Text>
      <Text style={styles.phoneNumber}>{ong.phoneNumber}</Text>
      <Text style={styles.email}>{ong.email}</Text>
      <Text style={styles.description}>{ong.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5,
  },
  email: {
    fontSize: 16,
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default OngProfile;
