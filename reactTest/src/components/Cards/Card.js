import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {w} from '../../consts/consts';

export const Card = ({card, goToDescription}) => {
  const {name, image} = card;
  console.log(name);

  let shortName = name.split(' ');
  shortName = shortName.length > 1 ? shortName.slice(1).join(' ') : name;

  return (
    <TouchableOpacity onPress={() => goToDescription(card)}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.title}>{shortName}</Text>
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
