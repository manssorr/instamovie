import {Platform} from 'react-native';
import {API_KEY, BASE_URL} from './CONSTANTS';
import nativeGet, {IResponse} from './NativeModules/NetworkingModule';
import {cacheMovie, cacheMoviesList} from './caching/cache';

const isAndroid = Platform.OS === 'android';

const apiCall = async (endpoint, params): IResponse => {
  console.log(`apiCall called at: `, endpoint);
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
      return {
        success: false,
        status_code: 0,
        status_message: error.message,
        data: error,
      };
    }
  }
};

export const getPopularMovies: IResponse = async () => {
  const response = await apiCall('movie/popular');

  if (response.success) {
    const cached = cacheMoviesList('popular', response.data.results, '', 1);
  }
  return response;
};

export const getTopRatedMovies: IResponse = () => apiCall('movie/top_rated');

export const getTrendingMovies: IResponse = async (
  period: 'day' | 'week' = 'week',
) => {
  const response = await apiCall(`trending/movie/${period}`);

  if (response.success) {
    const cached = cacheMoviesList(
      'trending',
      response.data.results,
      '',
      'week', // cache for 1 week
    );
  }
  return response;
};

export const getSimilarMovies = async movie_id => {
  const response = await apiCall(`movie/${movie_id}/similar`);

  if (response.success) {
    const cached = cacheMoviesList('similar', response.data.results, movie_id);
  }
  return response;
};

export const getMovie = async movie_id => {
  const response = await apiCall(`movie/${movie_id}`);

  if (response.success) {
    const cached = cacheMovie(movie_id, response.data, 'week');
  }

  return response;
};

export const getAllMoviesByPage = page =>
  apiCall(`discover/movie?page=${page}`);
