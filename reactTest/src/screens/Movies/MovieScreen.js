import React from 'react';
import {Text, StyleSheet, Image, ScrollView} from 'react-native';
import {w, baseUrlImage} from '../../consts/consts';

export const MovieScreen = ({route}) => {
  const {title, release_date, poster_path, info} = route.params.movie;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <Text style={styles.name}>{title}</Text>
      <Image
        source={{uri: `${baseUrlImage}w185/${poster_path}`}}
        style={styles.image}
      />
      <Text style={styles.year}>Release: {release_date}</Text>
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
