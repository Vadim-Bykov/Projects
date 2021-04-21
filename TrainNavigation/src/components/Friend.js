import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Friend = ({name, goToFriend}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => goToFriend(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Friend;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
