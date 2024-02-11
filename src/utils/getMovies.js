import {API_KEY, BASE_URL} from './CONSTANTS';

const getMovies = async () => {
  const response = await fetch(`${BASE_URL} ${API_KEY}`);
  const json = await response.json();
  return json;
};

export default getMovies;
