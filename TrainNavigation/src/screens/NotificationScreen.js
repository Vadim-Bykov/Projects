import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NotificationScreen = ({navigation}) => {
  const goToComments = () => navigation.navigate('Comments');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification</Text>
      <Button title="Go to comments" onPress={goToComments} />
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
  text: {
    margin: 10,
  },
});
