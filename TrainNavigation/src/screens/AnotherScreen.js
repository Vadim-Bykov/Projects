import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const AnotherScreen = ({navigation}) => {
  // const toggleMenu = () => navigation.toggleDrawer();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More information</Text>
      <Button title="Menu" onPress={toggleMenu} />
    </View>
  );
};

export default AnotherScreen;

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
