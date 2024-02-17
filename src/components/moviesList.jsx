import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, FlatListProps} from 'react-native';
import {data, errors} from '../utils/CONSTANTS';
import {type IMovie} from '../utils/types';
import MovieCard from './MovieCard';
import AppText from './AppText';
import Loading from './Loading';
import SectionHeaderComponent from './SectionHeaderComponent';
import Error from './Error';

interface IProps extends FlatListProps<IMovie> {
  children: any;
  movies: any[];
}

const MoviesList = ({movies, isLoading, isError, errorMessage}): IProps => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionHeaderComponent title="Popular movies" />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error customText={errorMessage} />
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => <MovieCard movie={item} />}
          ListEmptyComponent={<Error customText={errors.EMPTY} />}
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
      )}
    </SafeAreaView>
  );
};

export default MoviesList;
