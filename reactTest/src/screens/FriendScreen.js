import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FriendScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>Friend {route.params.name}</Text>
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
