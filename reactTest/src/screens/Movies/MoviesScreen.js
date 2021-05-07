import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import * as api from '../../api/axiosApi';
import {MoviesList} from './components/MoviesList';
import {useQuery} from 'react-query';

export const MoviesScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const goToDescription = movie => navigation.navigate('Movie', {movie});

  const {isLoading, isError, data, error, refetch} = useQuery(
    ['movies'],
    () => api.getMovies(pageNumber),
    {retry: 2, keepPreviousData: true},
  );
  useEffect(() => refetch(), [pageNumber]);

  return (
    <View style={styles.container}>
      {isError && <Text>{error.message}</Text>}
      <Button title="+" onPress={() => setPageNumber(prev => prev + 1)} />
      <Button title="-" onPress={() => setPageNumber(prev => prev - 1)} />
      <Text>{pageNumber}</Text>
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
