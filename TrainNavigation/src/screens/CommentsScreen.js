import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CommentsScreen = ({navigation}) => {
  const goToNotification = () => navigation.navigate('Notification');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comments</Text>
      <Button title="Go to notification" onPress={goToNotification} />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
  },
});
