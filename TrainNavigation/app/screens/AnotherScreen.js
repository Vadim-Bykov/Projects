import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BurgerMenu} from '../common/BurgerMenu';

const AnotherScreen = ({navigation}) => {
  return (
    <>
      <BurgerMenu navigation={navigation} />
      <View style={styles.container}>
        <Text>Another page</Text>
      </View>
    </>
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

export const AnotherScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Another Stack" component={AnotherScreen} />
  </Stack.Navigator>
);
