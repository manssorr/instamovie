import {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {data} from '../utils/CONSTANTS';
import MovieCard from './MovieCard';
import AppText from './AppText';
import Loading from './Loading';

const MoviesList = ({movies, headerComponent}) => {
  return (
    <>
      <AppText className="pb-1 text-lg font-bold">All Movies</AppText>
      <FlatList
        data={movies}
        renderItem={({item}) => <MovieCard movie={item} />}
        ListEmptyComponent={<AppText>No data</AppText>}
        numColumns={2}
        ListHeaderComponent={() => headerComponent}
        keyExtractor={item => item.id.toString()}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 20}}
      />
    </>
  );
};

export default MoviesList;
