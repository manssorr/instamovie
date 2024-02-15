import {Platform} from 'react-native';
import {API_KEY, BASE_URL} from '../CONSTANTS';
import GetRequestModule, {nativeGet} from '../NativeModules/NetworkingModule';

const isAndroid = Platform.OS === 'android';

const apiCall = async (endpoint, params): IResponse => {
  const options = {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      accept: 'application/json',
    },
  };

  if (isAndroid) {
    return await nativeGet(BASE_URL + endpoint + API_KEY);
  }
  // Not Android
  else {
    try {
      const response = await fetch(BASE_URL + endpoint + API_KEY, options);
      const data = await response.json();

      if (response.ok) {
        return {
          success: response.ok,
          status_code: response.status,
          status_message: 'Success',
          data,
        };
      } else {
        return {
          success: response.ok,
          status_code: response.status,
          status_message: data.status_message,
          data: '',
        };
      }
    } catch (error) {
      console.log(`error`, error);
      return {
        success: false,
        status_code: 0,
        status_message: error.message,
        data: error,
      };
    }
  }
};

export const getAllMovies = () => apiCall('discover/movie');

export const getAllMoviesByPage = page =>
  apiCall(`discover/movie?page=${page}`);

export const getMovie = movie_id => apiCall(`movie/${movie_id}`);

export const getSimilarMovies = movie_id =>
  apiCall(`movie/${movie_id}/similar`);
