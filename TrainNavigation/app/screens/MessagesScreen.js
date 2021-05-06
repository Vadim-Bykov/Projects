import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Messages page</Text>
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

const Stack = createStackNavigator();

export const StackMessagesScreen = () => (
  <Stack.Navigator>
    <Stack.Screen component={MessagesScreen} name="MessagesStack" />
  </Stack.Navigator>
);
