import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {data} from '../utils/CONSTANTS';
import MovieCard from './MovieCard';
import AppText from './AppText';
import Loading from './Loading';

const MoviesList = ({movies, headerComponent}) => {
  return (
    <FlatList
      data={movies}
      ListHeaderComponent={() => headerComponent}
      renderItem={({item}) => <MovieCard movie={item} />}
      ListEmptyComponent={<AppText>No data</AppText>}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap: 20}}
      ListHeaderComponentStyle={{
        // fix all movies header extra down space because of gap and the padding of the MovieCard
        marginBottom: -20,
      }}
    />
  );
};

export default MoviesList;
