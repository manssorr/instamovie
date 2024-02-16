import React from 'react';
import {NativeModules, Button, View} from 'react-native';
import {getAllMovies, getAllMoviesByPage} from '../utils/api/api';
import AppButtom from '../components/AppBottom';
const {CalendarModule} = NativeModules;

const TestScreen = () => {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'b4cdf243de74de7898c5475998831984';
  const endpoint = 'discover/movie';

  const url = BASE_URL + endpoint + `?api_key=${API_KEY}`;
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  const onSubmit = async () => {
    const response = await getAllMovies();
    console.log(`onSubmit`, JSON.stringify(response, null, 2));
  };

  return (
    <View className="justify-center flex-1 p-3 align-middle ">
      <AppButtom
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onSubmit}
      />
    </View>
  );
};

export default TestScreen;
