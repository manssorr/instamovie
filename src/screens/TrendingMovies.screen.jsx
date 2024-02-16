import {Button, Platform, View, ScrollView} from 'react-native';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import {data2, routes} from '../utils/CONSTANTS';
import AppBottom from '../components/AppBottom';
import {Screen} from '../components/Screen';
import {
  getAllMovies,
  getAllMoviesByPage,
  getTrendingMovies,
} from '../utils/api/api';
import {useEffect, useState} from 'react';
import TendingSection from '../components/TrendingSection';
import TrendingSection from '../components/TrendingSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import SectionHeaderComponent from '../components/SectionHeaderComponent';

const isIOS = Platform.OS === 'ios';

const TrendingMoviesScreen = ({navigation}) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const allTrendingMovies = await getTrendingMovies();
    setTrendingMovies(allTrendingMovies.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Screen>
        <MoviesList movies={trendingMovies} />
      </Screen>
    </>
  );
};

export default TrendingMoviesScreen;
