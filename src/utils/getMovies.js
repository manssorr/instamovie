import {API_KEY, BASE_URL} from './CONSTANTS';

const getMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL} ${API_KEY}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log('error: ', error.message);
  }
};

export default getMovies;
