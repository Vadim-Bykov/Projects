import {useFocusEffect} from '@react-navigation/core';
import React, {useEffect, useCallback, useState, useRef} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardsList} from '../components/Cards/CardsList';
import {w} from '../consts/consts';
import {setDataCards} from '../store/starGate/operations';
import * as selectors from '../store/starGate/selectors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {filterCards} from '../store/starGate/actions';
import {BurgerMenu} from '../common/BurgerMenu';

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

  const [text, setText] = useState('');
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const cards = useSelector(selectors.getCards);
  const filteredCards = useSelector(selectors.getFilteredCards);
  const inputRef = useRef(null);

  useEffect(() => {
    dispatch(setDataCards());
  }, []);

  const toggleMenu = () => navigation.toggleDrawer();
  const goToDescription = card => navigation.navigate('Card', {card});

  const onSubmitHandler = () => {
    if (text.trim()) {
      dispatch(filterCards(text));
      inputRef.current.blur();
      setText('');
      setSearch(true);
    } else {
      Alert.alert('Type something to search');
    }
  };

  const onResetSearch = () => {
    dispatch(filterCards(''));
    setSearch(false);
  };

  return (
    <>
      <BurgerMenu toggleMenu={toggleMenu} />
      <View style={styles.container}>
        <View style={styles.inputWrap}>
          <TextInput
            ref={inputRef}
            placeholder="Search move"
            value={text}
            onChangeText={setText}
            onSubmitEditing={onSubmitHandler}
            style={styles.input}
          />
          <TouchableOpacity onPress={onSubmitHandler}>
            <Feather name="search" size={20} />
          </TouchableOpacity>
        </View>
        <CardsList
          cards={search ? filteredCards : cards}
          goToDescription={goToDescription}
        />
        <View style={styles.btn}>
          <Button title="Reset search" onPress={onResetSearch} />
        </View>
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
  inputWrap: {
    width: w - 50,
    marginTop: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  input: {
    // backgroundColor: 'blue',
    borderRightColor: '#000',
    borderRightWidth: StyleSheet.hairlineWidth,
    width: '90%',
  },

  btn: {
    marginVertical: 10,
  },
});
