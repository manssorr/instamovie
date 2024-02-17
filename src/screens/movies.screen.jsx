import {Button, Platform, View, ScrollView} from 'react-native';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import {data2, routes} from '../utils/CONSTANTS';
import AppBottom from '../components/AppBottom';
import {Screen} from '../components/Screen';
import {getPopularMovies, getTrendingMovies} from '../utils/api';
import {useEffect, useState} from 'react';
import TrendingSection from '../components/TrendingSection';
import SectionHeaderComponent from '../components/SectionHeaderComponent';
import Error from '../components/Error';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getCachedMoviesList} from '../utils/caching/cache';
import useOffline from '../utils/hooks/useOffline';

const isIOS = Platform.OS === 'ios';

const MoviesScreen = ({navigation}) => {
  const connected = useOffline();

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularLoading, setPopularLoading] = useState({});
  const [popularError, setPopularError] = useState(false);
  const [popularErrorMessage, setPopularErrorMessage] = useState('');

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingLoading, setTrendingLoading] = useState({});
  const [trendingError, setTrendingError] = useState(false);
  const [trendingErrorMessage, setTrendingErrorMessage] = useState('');

  const resetPopular = () => {
    setPopularError(false);
    setPopularErrorMessage('');
    setPopularLoading(false);
  };
  const resetTrending = () => {
    setTrendingError(false);
    setTrendingErrorMessage('');
    setTrendingLoading(false);
  };

  const fetchPopularMovies = async () => {
    setPopularLoading(true);

    // check cache
    let cachedPopularMovies = getCachedMoviesList('popular');
    if (cachedPopularMovies) {
      setPopularMovies(cachedPopularMovies);
      resetPopular();
      return;
    } else {
      if (!connected) {
        setPopularMovies([]);
        setPopularError(true);
        setPopularErrorMessage('No internet connection');
        setPopularLoading(false);
        return;
      }

      let popularMoviesResult = await getPopularMovies();

      if (!popularMoviesResult.success) {
        setPopularMovies([]);
        setPopularError(true);
        setPopularErrorMessage(
          popularMoviesResult?.status_message || 'Something went wrong',
        );
        setPopularLoading(false);
        return;
      }
      setPopularMovies(popularMoviesResult.data.results);
      resetPopular();
    }
  };

  const fetchTrendingMovies = async () => {
    setTrendingLoading(true);

    // check cache
    let cachedTrendingMovies = getCachedMoviesList('trending');
    if (cachedTrendingMovies) {
      setTrendingMovies(cachedTrendingMovies);
      resetTrending();
      return;
    } else {
      if (!connected) {
        setTrendingMovies([]);
        setTrendingError(true);
        setTrendingErrorMessage('No internet connection');
        setTrendingLoading(false);
        return;
      } else {
        let trendingMoviesResult = await getTrendingMovies();

        if (!trendingMoviesResult.success) {
          setTrendingMovies([]);
          setTrendingError(true);
          setTrendingErrorMessage(
            trendingMoviesResult?.status_message || 'Something went wrong',
          );
          setTrendingLoading(false);
          return;
        }
        setTrendingMovies(trendingMoviesResult.data.results);
        resetTrending();
        return;
      }
    }
  };

  // check if empty on popular change
  useEffect(() => {
    // check if popular movies are empty
    const isPopularEmpty = popularMovies?.length === 0;
    if (isPopularEmpty) {
      setPopularError(true);
      setPopularErrorMessage('No movies found');
      setPopularLoading(false);
    }

    // check if trending movies are empty
    const isTrendingEmpty = trendingMovies?.length === 0;
    if (isTrendingEmpty) {
      setTrendingError(true);
      setTrendingErrorMessage('No movies found');
      setTrendingLoading(false);
    }
  }, [popularMovies, trendingMovies]);

  // on first render
  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMovies();
  }, []);

  // network change or value change
  useEffect(() => {
    fetchTrendingMovies();
    fetchPopularMovies();
  }, [connected]);

  return (
    <>
      <Screen>
        <ScrollView>
          <TrendingSection
            data={trendingMovies}
            isLoading={trendingLoading}
            isError={trendingError}
            errorMessage={trendingErrorMessage}
          />

          <MoviesList
            movies={popularMovies}
            isLoading={popularLoading}
            isError={popularError}
            errorMessage={popularErrorMessage}
          />
        </ScrollView>
      </Screen>
    </>
  );
};

export default MoviesScreen;
