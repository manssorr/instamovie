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

  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  uniqueKey: string;
}

const MoviesList = ({
  movies,

  isLoading,
  isError,
  errorMessage,
  uniqueKey,
}): IProps => {
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
          renderItem={({item}) => (
            <MovieCard movie={item} uniqueKey={uniqueKey} />
          )}
          ListEmptyComponent={<Error customText={errors.EMPTY} />}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={styles.columnWrapperStyle}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      )}
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  listHeader: {
    marginBottom: 20,
  },
  contentContainerStyle: {
    gap: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
