import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {MovieScreen} from '../screens/Movies/MovieScreen';
import {MoviesScreen} from '../screens/Movies/MoviesScreen';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const iosTransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

export const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
        transitionSpec: {open: iosTransitionSpec, close: iosTransitionSpec},
        ...TransitionPresets.SlideFromRightIOS,
        // ...TransitionPresets.ModalSlideFromBottomIOS,
      }}>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={({route}) => ({
          title: route.params.movie.title,
        })}
        sharedElementsConfig={route => {
          return [{id: route.params.movie.id}];
        }}
      />
    </Stack.Navigator>
  );
};
