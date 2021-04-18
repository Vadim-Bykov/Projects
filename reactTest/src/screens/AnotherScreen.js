import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const AnotherScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <View style={styles.container}>
      <Text>Еще</Text>
      <Button title="Side menu" onPress={toggleMenu} />
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
});
