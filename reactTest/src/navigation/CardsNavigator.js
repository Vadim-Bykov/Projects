import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CardScreen} from '../screens/CardScreen';
import {CardsScreen} from '../screens/CardsScreen';

const Stack = createStackNavigator();

export const CardsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cards" component={CardsScreen} />
      <Stack.Screen
        name="Card"
        component={CardScreen}
        options={({route}) => ({title: route.params.card.name})}
      />
    </Stack.Navigator>
  );
};
