import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MusicScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <View style={styles.container}>
      <Text>Music</Text>
      <Button title="Side menu" onPress={toggleMenu} />
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
});
