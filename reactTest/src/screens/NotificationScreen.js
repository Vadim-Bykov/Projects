import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const NotificationScreen = ({navigation}) => {
  const doToComment = () => navigation.navigate('Comment');

  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <Button title="Comments" onPress={doToComment} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
