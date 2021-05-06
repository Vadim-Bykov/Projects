import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const NotificationScreen = ({navigation}) => {
  const goToCall = () => navigation.navigate('Call');

  return (
    <View style={styles.container}>
      <Text>Notification page</Text>
      <Button title="Go to call" onPress={goToCall} />
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
