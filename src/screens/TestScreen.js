import React from 'react';
import {NativeModules, Button, View} from 'react-native';
import {getPoularMoviesList, getAllMoviesByPage} from '../utils/api';
import AppButtom from '../components/AppBottom';
import AppText from '../components/AppText';
import storage, {clear, load, remove, save} from '../utils/storage';
import {
  cacheMovie,
  cacheMoviesList,
  getCachedMovie,
  getCachedMoviesList,
} from '../utils/caching/cache';
const {CalendarModule} = NativeModules;

const TestScreen = () => {
  const [value, setValue] = React.useState('');

  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'b4cdf243de74de7898c5475998831984';
  const endpoint = 'discover/movie';

  const url = BASE_URL + endpoint + `?api_key=${API_KEY}`;
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  const onSubmit = async () => {
    const response = await getPoularMoviesList();
  };

  const settingValue = () => {
    const movieFakeData = {title: 'test'};
    const listFakeData = [{title: 'test1'}, {title: 'test2'}, {title: 'test3'}];

    cacheMovie('123', movieFakeData);

    cacheMoviesList('similar', listFakeData, '123');
    // cacheMoviesList('', undefined);
  };

  const getValue = async () => {
    // const resMovie = getCachedMovie(undefined);
    const resList = getCachedMoviesList('popular');
    console.log('resList', resList);
  };

  const getAll = () => {
    const res = storage.getAllKeys();
    console.log('All', JSON.stringify(res, null, 2));
  };
  const clearValue = () => {
    clear();
  };

  return (
    <View className="justify-between flex-1 py-40 align-middle bg-neutral-900">
      <AppButtom
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onSubmit}
      />
      <AppButtom title="Save value" color="#841584" onPress={settingValue} />

      <AppButtom title="Get value" color="#841584" onPress={getValue} />

      <AppButtom title="Get All" color="#841584" onPress={getAll} />

      <AppButtom title="Clear" color="#841584" onPress={clearValue} />

      <AppText className="p-3 text-xl font-bold text-center text-white bg-orange-300">
        {value ? value.title : 'No Value'}
      </AppText>
    </View>
  );
};

export default TestScreen;
