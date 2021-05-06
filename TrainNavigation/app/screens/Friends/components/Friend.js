import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const Friend = ({name, goToFriend}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => goToFriend(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
