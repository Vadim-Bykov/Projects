import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BurgerMenu} from '../common/BurgerMenu';

export const MusicScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <>
      <BurgerMenu toggleMenu={toggleMenu} />
      <View style={styles.container}>
        <Text>Music</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
