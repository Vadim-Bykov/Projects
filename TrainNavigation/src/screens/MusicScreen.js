import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const MusicScreen = ({navigation}) => {
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
  // const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Music</Text>
      <Button title="Menu" onPress={toggleMenu} />
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'blue',
  },
});
