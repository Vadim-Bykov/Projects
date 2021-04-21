import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const GroupsScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();
  // const toggleMenu = navigation.dispatch(DrawerActions.toggleDrawer());
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups</Text>
      <Button title="Menu" onPress={toggleMenu} />
    </View>
  );
};

export default GroupsScreen;

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
