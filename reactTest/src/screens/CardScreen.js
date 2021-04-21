import React from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native';
import {w} from '../consts/consts';

export const CardScreen = ({route}) => {
  const {name, year, image, info} = route.params.card;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.year}>Release: {year}</Text>
      <Text style={styles.info}>{info}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: w / 1.5,
    height: w,
    marginBottom: 10,
  },
  year: {
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    marginBottom: 32,
    textAlign: 'justify',
  },
});
