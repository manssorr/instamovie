import {View, FlatList, FlatListProps, StyleSheet} from 'react-native';
import {errors} from '../utils/CONSTANTS';
import {type IMovie} from '../utils/types';
import MovieCard from './MovieCard';
import Loading from './Loading';
import SectionHeaderComponent from './SectionHeaderComponent';
import Error from './Error';

interface IProps extends FlatListProps<IMovie> {
  children: any;
  movies: any[];
}

const MoviesList = ({movies, isLoading, isError, errorMessage}): IProps => {
  return (
    <View className="">
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
          // columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 20}}
        />
      )}
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    marginBottom: 20,
  },
  gap20: {
    gap: 20,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
});
