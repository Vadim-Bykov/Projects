import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CommentScreen = ({navigation}) => {
  const doToNotification = () => navigation.navigate('Notification');

  return (
    <View style={styles.container}>
      <Text>Comments</Text>
      <Button title="Notifications" onPress={doToNotification} />
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
