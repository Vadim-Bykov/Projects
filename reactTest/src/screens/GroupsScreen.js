import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const GroupsScreen = ({navigation}) => {
  const toggleMenu = () => navigation.toggleDrawer();

  return (
    <View style={styles.container}>
      <Text>Groups</Text>
      <Button title="Side menu" onPress={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
