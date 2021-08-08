import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
  Easing,
  useWindowDimensions,
  PanResponder,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
// import { SharedElement } from 'react-native-shared-element';
import {w, baseUrlImage} from '../../consts/consts';

const getDistance = ([xA, yA], [xB, yB]) =>
  Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));

export const MovieScreen = ({route}) => {
  const {title, release_date, poster_path, overview, id} = route.params.movie;
  const {width} = useWindowDimensions();
  const [initialDistance, setInitialDistance] = useState(0);

  const pan = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const scale = useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: (event, gestureState) => {
      const touches = event.nativeEvent.changedTouches;

      if (touches.length >= 2) {
        const distance = getDistance(
          [touches[0].pageX, touches[0].pageY],
          [touches[1].pageX, touches[1].pageY],
        );
        console.log('distance', distance);
        console.log('initialDistance_Grant', initialDistance);

        setInitialDistance(distance);
      }
      // pan.setOffset({
      //   x: pan.x._value,
      //   y: pan.y._value,
      // });
    },

    // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
    onPanResponderMove: (event, gestureState) => {
      const touches = event.nativeEvent.changedTouches;
      if (touches.length === 1) {
        pan.setValue({x: gestureState.dx, y: gestureState.dy});
        // pan.x.setValue(gestureState.dx);
        // pan.y.setValue(gestureState.dy);
      } else if (touches.length > 1) {
        const distance = getDistance(
          [touches[0].pageX, touches[0].pageY],
          [touches[1].pageX, touches[1].pageY],
        );

        const screenMovedPercents = (distance - initialDistance) / width;

        scale.setValue(1 + screenMovedPercents);
      }
    },

    onPanResponderRelease: () => {
      // pan.flattenOffset();
      setInitialDistance(0);

      Animated.parallel([
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    },
  });

  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      // delay: 50,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, []);

  const translateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
  });

  const translate_X = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });

  const translateX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <Animated.Text
        style={[styles.name, {transform: [{translateX: translate_X}]}]}>
        {title}
      </Animated.Text>

      <SharedElement id={id}>
        <Animated.Image
          source={{uri: `${baseUrlImage}w185/${poster_path}`}}
          style={[
            styles.image,
            {
              transform: [{translateX: pan.x}, {translateY: pan.y}, {scale}],
            },
          ]}
          {...panResponder.panHandlers}
        />
      </SharedElement>

      <Animated.Text style={[styles.year, {transform: [{translateX}]}]}>
        Release: {release_date}
      </Animated.Text>
      <Animated.Text
        style={[styles.info, {opacity, transform: [{translateY}]}]}>
        {overview}
      </Animated.Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: w / 1.5,
    height: w,
    marginBottom: 10,
  },
  year: {
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    marginBottom: 32,
    textAlign: 'justify',
  },
});
