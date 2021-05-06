import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FriendScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>Friend: {route.params.name}</Text>
    </View>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
