import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getMovies} from '../../api/axiosApi';
import {MoviesList} from './components/MoviesList';
import {useQuery} from 'react-query';

export const MoviesScreen = ({navigation}) => {
  const goToDescription = movie => navigation.navigate('Movie', {movie});

  // const [movies, setMovies] = useState(null);

  // useEffect(() => {
  //   getMovies(10).then(movies => setMovies(movies));
  // }, []);

  // console.log(movies);

  const {data} = useQuery('movies', () => getMovies(11));
  console.log(data);

  return (
    <View style={styles.container}>
      <MoviesList movies={data} goToDescription={goToDescription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: 'cover',
  },
});
