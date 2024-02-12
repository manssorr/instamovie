import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Button,
  View,
  Text,
} from 'react-native';
import MoviesList from '../components/moviesList';
import Header from '../components/header';
import {routes} from '../utils/CONSTANTS';

const MoviesScreen = ({navigation}) => {
  return (
    <>
      <View className="flex-1 bg-neutral-900">
        <Header title="Movies" />
        <MoviesList />
        <Button
          title="go movie"
          onPress={() => {
            console.log(`Hi`);
            navigation.navigate(routes.MOVIE);
          }}
        />
      </View>
    </>
  );
};

export default MoviesScreen;
