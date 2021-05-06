import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MovieScreen} from '../screens/Movies/MovieScreen';
import {MoviesScreen} from '../screens/Movies/MoviesScreen';

const Stack = createStackNavigator();

export const MoviesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={({route}) => ({title: route.params.movie.title})}
      />
    </Stack.Navigator>
  );
};
