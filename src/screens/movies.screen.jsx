import {Button, Platform, View, ScrollView} from 'react-native';
import MoviesList from '../components/MoviesList';
import Header from '../components/Header';
import {data2, routes} from '../utils/CONSTANTS';
import AppBottom from '../components/AppBottom';
import {Screen} from '../components/Screen';
import {getAllMovies, getAllMoviesByPage} from '../utils/api/api';
import {useEffect, useState} from 'react';
import TendingSection from '../components/TrendingSection';
import TrendingSection from '../components/TrendingSection';
import {SafeAreaView} from 'react-native-safe-area-context';

const isIOS = Platform.OS === 'ios';

const MoviesScreen = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    const allMoviesRes = await getAllMovies();
    setMovies(allMoviesRes.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Screen>
        <ScrollView>
          <SafeAreaView>
            <TrendingSection data={movies} isLoading={isLoading} />
          </SafeAreaView>
          <SafeAreaView>
            <MoviesList
              // headerComponent={
              //   <TrendingSection data={movies} isLoading={isLoading} />
              // }
              movies={movies}
              fetchMovies={fetchMovies}
              isLoading={isLoading}
            />
          </SafeAreaView>
        </ScrollView>
      </Screen>
    </>
  );
};

export default MoviesScreen;
