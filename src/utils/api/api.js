import {API_KEY, BASE_URL} from '../CONSTANTS';
import {getGeneralApiProblem} from './handleError';

const apiCall = async (endpoint, params) => {
  const options = {
    method: 'GET',
    params: {
      ...params,
    },
    headers: {
      accept: 'application/json',
    },
  };

  try {
    // const response = await fetch(
    //   BASE_URL + endpoint + `?api_key=${API_KEY}`,
    //   options,
    // );

    const response = await fetch(
      BASE_URL + endpoint + `?api_key=${API_KEY}`,
      options,
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    const json = await response.json();
    if (json) {
      return {kind: 'ok', ...json};
    }
  } catch (error) {
    return error;
  }
};

export const getAllMovies = () => apiCall('discover/movie');

export const getAllMoviesByPage = page =>
  apiCall(`discover/movie?page=${page}`);

export const getMovie = movie_id => apiCall(`movie/${movie_id}`);

export const getSimilarMovies = movie_id =>
  apiCall(`movie/${movie_id}/similar`);
