import {useFocusEffect} from '@react-navigation/core';
import React, {useEffect, useCallback} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardsList} from '../components/Cards/CardsList';
import {setDataCards} from '../store/starGate/operations';
import {getCards} from '../store/starGate/selectors';

export const CardsScreen = ({navigation}) => {
  // Стоит ли использовать такой метод или достаточно обычный useEffect?

  //   useFocusEffect(
  //     useCallback(() => {
  //       const fetchData = async () => {
  //         try {
  //           const res = await fetch(url);
  //           const data = await res.json();
  //           setCards(data);
  //         } catch (error) {
  //           throw new Error(error);
  //         }
  //       };
  //       fetchData();
  //     }, []),
  //   );

  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  useEffect(() => {
    dispatch(setDataCards());
  }, []);

  const toggleMenu = () => navigation.toggleDrawer();
  const goToDescription = card => navigation.navigate('Card', {card});

  return (
    <View style={styles.container}>
      <CardsList cards={cards} goToDescription={goToDescription} />
      <Button title="Menu" onPress={toggleMenu} />
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
