import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import { SharedElement } from 'react-native-shared-element';
import { SharedElement } from 'react-navigation-shared-element';
import {w, baseUrlImage} from '../../../consts/consts';

export const Movie = ({movie, goToDescription}) => {
  const {title, poster_path, id} = movie;

  return (
    <TouchableOpacity onPress={() => goToDescription(movie)}>
      <View style={styles.container}>
        <SharedElement id={id}> 
          <Image
          source={{uri: `${baseUrlImage}w185/${poster_path}`}}
          style={styles.image}
          />
        </SharedElement>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: w / 2.5,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(205,250,255, 1)',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: 'blue',
    shadowColor: '#000',
    //  shadowOffset: {
    //    width: 5,
    //    height: 5,
    //  },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: w / 2.5,
    height: w * 0.63,
    borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
  },
});
