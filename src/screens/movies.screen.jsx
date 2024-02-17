import {Button, Platform, View, ScrollView} from 'react-native';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import {data2, errors, routes} from '../utils/CONSTANTS';
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
import {useNetInfo} from '@react-native-community/netinfo';

const isIOS = Platform.OS === 'ios';

const MoviesScreen = ({navigation}) => {
  const netInfo = useNetInfo();
  const connected = netInfo.isConnected;
  const disconnected = !connected;

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularLoading, setPopularLoading] = useState({});
  const [popularError, setPopularError] = useState(false);
  const [popularErrorMessage, setPopularErrorMessage] = useState('');

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingLoading, setTrendingLoading] = useState({});
  const [trendingError, setTrendingError] = useState(false);
  const [trendingErrorMessage, setTrendingErrorMessage] = useState('');
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

  const fetchPopularMovies = async () => {
    setPopularLoading(true);
    setPopularError(false);
    setPopularErrorMessage('');

    // check cache
    let cachedPopularMovies = getCachedMoviesList('popular');

    if (cachedPopularMovies) {
      setPopularMovies(cachedPopularMovies);
      // got cached data continue to reset
    } else {
      // check internet
      if (disconnected) {
        // no cache and no internet
        // set connection error
        setPopularMovies([]);
        setPopularError(true);
        setPopularErrorMessage(errors.NO_CONNECTION);
        setPopularLoading(false);

        // stop here
        return;
      } else if (connected) {
        // continue to fetch new data
        let popularMoviesResult = await getPopularMovies();
        const requestFailed = popularMoviesResult.success === false;
        console.log(
          `getPopularMovies> status_message: `,
          popularMoviesResult?.status_message,
        );

        // check if request failed
        if (requestFailed) {
          // failed to fetch new data
          // set server error
          setPopularMovies([]);
          setPopularError(true);
          setPopularErrorMessage(errors.SERVER_ERROR);
          setPopularLoading(false);

          // stop here
          return;
        }

        // if request succeeded continue
        setPopularMovies(popularMoviesResult.data.results);
        // continue to reset
      }
    }

    // now we have the data (cached or not)
    // reset the error state
    setPopularError(false);
    setPopularErrorMessage('');

    setPopularLoading(false);
  };

  const fetchTrendingMovies = async () => {
    setTrendingLoading(true);

    // check cache
    let cachedTrendingMovies = getCachedMoviesList('trending');
    if (cachedTrendingMovies) {
      setTrendingMovies(cachedTrendingMovies);
      // got cached data continue to reset
    } else {
      // check internet
      if (disconnected) {
        // no cache and no internet
        // set connection error
        setTrendingMovies([]);
        setTrendingError(true);
        setTrendingErrorMessage(errors.NO_CONNECTION);
        setTrendingLoading(false);

        // stop here
        return;
      } else if (connected) {
        // continue to fetch new data
        let trendingMoviesResult = await getTrendingMovies();
        const requestFailed = trendingMoviesResult.success === false;
        console.log(
          `getTrendingMovies> status_message: `,
          trendingMoviesResult?.status_message,
        );

        // check if request failed
        if (requestFailed) {
          // failed to fetch new data
          // set server error
          setTrendingMovies([]);
          setTrendingError(true);
          setTrendingErrorMessage(errors.SERVER_ERROR);
          setTrendingLoading(false);

          // stop here
          return;
        }

        // if request succeeded continue
        setTrendingMovies(trendingMoviesResult.data.results);

        // continue to reset
      }
    }

    // now we have the data (cached or not)
    // reset the error state
    setTrendingError(false);
    setTrendingErrorMessage('');

    setTrendingLoading(false);
  };

  return (
    <>
      <Screen>
        {/* <ScrollView> */}
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
        {/* </ScrollView> */}
      </Screen>
    </>
  );
};

export default MoviesScreen;
