import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import getMovies from '../utils/getMovies';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const result = await getMovies();
    setMovies(result.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // fetchMovies();
  }, []);

  return (
    <View className="bg-fuchsia-500 ">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={<Text>No data</Text>}
          onRefresh={async () => {
            setIsRefreshing(true);
            await fetchMovies();
            setIsRefreshing(false);
          }}
          refreshing={isRefreshing}
        />
      )}
    </View>
  );
};

export default MoviesList;
