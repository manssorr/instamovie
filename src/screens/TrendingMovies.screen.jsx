import MoviesList from '../components/MoviesList';
import {Screen} from '../components/Screen';
import {getTrendingMovies} from '../utils/api';
import {useEffect, useState} from 'react';
import {getCachedMoviesList} from '../utils/caching/cache';
import useOffline from '../utils/hooks/useOffline';

const TrendingMoviesScreen = ({navigation}) => {
  const connected = useOffline();

  const [trendingMovies, setTrendingMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchTrendingMovies = async () => {
    let trendingMoviesResult = [];
    setIsLoading(true);

    // check cache
    let cachedTrendingMovies = getCachedMoviesList('trending');

    if (cachedTrendingMovies) {
      setTrendingMovies(cachedTrendingMovies);
    } else {
      if (!connected) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage('No internet connection');

        return;
      }

      trendingMoviesResult = await getTrendingMovies();

      if (!trendingMoviesResult.success) {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage(trendingMoviesResult?.status_message);
      }
      setTrendingMovies(trendingMoviesResult.data.results);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Screen>
        <MoviesList
          movies={trendingMovies}
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
        />
      </Screen>
    </>
  );
};

export default TrendingMoviesScreen;
