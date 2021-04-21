import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
