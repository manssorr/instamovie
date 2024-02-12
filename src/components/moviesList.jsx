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

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View className="bg-fuchsia-500 ">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({item}) => <Text>{item.title}</Text>}
          ListEmptyComponent={<Text>No data</Text>}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={async () => {
            setIsRefreshing(true);
            await fetchMovies();
            setIsRefreshing(false);
          }}
          contentContainerStyle={{padding: 10}}
        />
      )}
    </View>
  );
};

export default MoviesList;
