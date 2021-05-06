import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const CallScreen = ({navigation}) => {
  const goToNotification = () => navigation.navigate('Notification');

  return (
    <View style={styles.container}>
      <Text>Call page</Text>
      <Button title="Go to notification" onPress={goToNotification} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
