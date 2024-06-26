//@ts-nocheck
import {View, Text, Image, ScrollView, Alert} from 'react-native';
import {useRoute, type RouteProp} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Device,
  colors,
  errors,
  getImage,
  getImage500px,
  noImage,
  routes,
} from '../utils/CONSTANTS';
import {
  type IGenre,
  type IFullMovie,
  type ParamList,
  type ICompany,
} from '../utils/types';
import LinearGradient from 'react-native-linear-gradient';
import Loading from '../components/Loading';
import {getMovie, getSimilarMovies} from '../utils/api';
import AppText from '../components/AppText';
import {Screen} from '../components/Screen';
import SectionList from '../components/SectionList';
import MovieCard from '../components/MovieCard';
import useOffline from '../utils/hooks/useOffline';
import {getCachedMovie, getCachedMoviesList} from '../utils/caching/cache';
import Error from '../components/Error';
import {useNetInfo} from '@react-native-community/netinfo';

const Genre = ({genre}: {genre: IGenre}) => {
  return (
    <View className="px-[5px] py-[2px] m-1 font-semibold rounded-lg bg-orange-200">
      <AppText className="font-semibold text-neutral-700 ">
        {genre.name}
      </AppText>
    </View>
  );
};

const MovieScreen = ({navigation}) => {
  const {
    params: {movieId},
  } = useRoute<RouteProp<ParamList, 'Movie'>>();
  const netInfo = useNetInfo();
  const connected = netInfo.isConnected;
  const disconnected = !connected;

  const [movie, setMovie] = useState<IFullMovie>();
  const [movieLoading, setMovieLoading] = useState(true);
  const [movieError, setMovieError] = useState(false);
  const [movieErrorMessage, setMovieErrorMessage] = useState('');

  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);
  const [similarError, setSimilarError] = useState(false);
  const [similarErrorMessage, setSimilarErrorMessage] = useState('');

  // on first render
  useEffect(() => {
    fetchMovie();
    fetchSimilarMovies();
  }, []);

  // network change or value change
  useEffect(() => {
    fetchMovie();
    fetchSimilarMovies();
  }, [connected, movieId]);

  const fetchMovie = async () => {
    setMovieLoading(true);
    setMovieError(false);
    setMovieErrorMessage('');

    // check cache
    let cachedMovie = getCachedMovie(movieId);

    if (cachedMovie) {
      setMovie(cachedMovie);
      // got cached data continue to reset
    } else {
      // check internet
      if (disconnected) {
        // no cache and no internet
        // set connection error

        setMovie({});
        setMovieError(true);
        setMovieErrorMessage(errors.NO_CONNECTION);
        setMovieLoading(false);

        // stop here
        return;
      } else if (connected) {
        // continue to fetch new data
        let movieResult = await getMovie(movieId);
        const requestFailed = movieResult.success === false;

        console.log(`getMovie> status_message: `, movieResult?.status_message);

        // check if request failed
        if (requestFailed) {
          // failed to fetch new data
          // set server error
          setMovie({});
          setMovieError(true);
          setMovieErrorMessage(errors.SERVER_ERROR);
          setMovieLoading(false);

          // stop here
          return;
        }

        // if request succeeded continue
        setMovie(movieResult.data);

        // continue to reset
      }
    }

    // now we have the data (cached or not)
    // reset the error state
    setMovieError(false);
    setMovieErrorMessage('');

    setMovieLoading(false);
  };

  const fetchSimilarMovies = async () => {
    setSimilarLoading(true);
    // check cache
    let cachedSimilarMovies = getCachedMoviesList('similar', movieId);

    if (cachedSimilarMovies) {
      setSimilarMovies(cachedSimilarMovies);
      // got cached data continue to reset
    } else {
      // check internet
      if (disconnected) {
        // no cache and no internet
        // set connection error
        setSimilarMovies([]);
        setSimilarError(true);
        setSimilarErrorMessage(errors.NO_CONNECTION);
        setSimilarLoading(false);

        // stop here
        return;
      } else if (connected) {
        // continue to fetch new data
        let similarMoviesResult = await getSimilarMovies(movieId);
        const requestFailed = similarMoviesResult.success === false;

        console.log(
          `getSimilarMovies> status_message: `,
          similarMoviesResult?.status_message,
        );

        // check if request failed
        if (requestFailed) {
          // failed to fetch new data
          // set server error
          setSimilarMovies([]);
          setSimilarError(true);
          setSimilarErrorMessage(errors.SERVER_ERROR);
          setSimilarLoading(false);

          // stop here
          return;
        }

        // if request succeeded continue
        setSimilarMovies(similarMoviesResult.data.results);

        // continue to reset
      }
    }

    // now we have the data (cached or not)
    // reset the error state
    setSimilarError(false);
    setSimilarErrorMessage('');

    setSimilarLoading(false);
  };

  // get the vote out of five, new_rate = (old_rate/10) * 5
  const starsCount: number = movie
    ? // put + to corelate to number
      +((movie.vote_average / 10) * 5).toFixed(0)
    : 0;

  // create string of starts by using Array.from method
  const stars = Array.from({length: starsCount}, _ => '⭐️').join('');

  // get release year
  const year = movie ? new Date(movie.release_date).getFullYear() : 'N/A';

  const image = getImage(movie);

  return (
    <Screen noPadding>
      {/* Screen Body */}
      {movieError ? (
        <Error customText={movieErrorMessage} />
      ) : movieLoading ? (
        <Loading title="Loading..." />
      ) : (
        <ScrollView>
          {/* Movie Poster Header */}
          <View className="">
            {/* Back image */}
            <Image
              source={image}
              style={{
                height: Device.SCREEN_HEIGHT / 2,
                width: Device.SCREEN_WIDTH,
              }}
            />

            {/* Upper Mask layer */}
            <LinearGradient
              className="absolute top-0"
              style={{
                width: Device.SCREEN_WIDTH,
                height: Device.SCREEN_HEIGHT / 2,
              }}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              colors={['transparent', 'rgba(23,23,23,0.6)', 'rgba(23,23,23,1)']}
            />
          </View>

          {/* Info */}
          <View className="-mt-10 border-solid h-50">
            {/* Title */}
            <Text className="text-3xl font-bold tracking-wider text-center text-white ">
              {movie?.title}
            </Text>
            <Text className="text-sm tracking-wider text-center text-orange-200 ">
              {movie?.tagline}
            </Text>

            {/* Info */}
            <Text className="justify-center mt-5 text-base font-semibold tracking-wider text-center align-middle text-neutral-400">
              {movie?.status} • {year ? year : 'Year unknown'} •{' '}
              {stars ? stars : 'Not Rated'}
            </Text>
            {/* Genres */}
            <View className="flex-row flex-wrap justify-center gap-1 mt-2">
              {movie?.genres?.map((genre, index) => (
                <Genre key={index} genre={genre} />
              ))}
            </View>
          </View>

          {/* Rest of body */}
          <View className="p-2">
            {/* Description */}
            <View className="mt-5">
              <AppText className="text-base font-semibold tracking-wider text-neutral-400 text-start ">
                {movie?.overview}
              </AppText>
            </View>

            {/* production_companies */}
            <SectionList<ICompany>
              headerTitle="Production ss Companies"
              data={movie?.production_companies}
              RenderItem={({item}) => <CompanyItem company={item} />}
              isLoading={false}
              noSeeMore
              className="mt-5"
              errorMessage="No production companies found"
              isError={movie?.production_companies.length === 0}
            />

            {/* Similar Movies */}
            <SectionList<IFullMovie>
              data={similarMovies}
              headerTitle="Similar Movies"
              isLoading={similarLoading}
              isError={similarError}
              errorMessage={
                similarErrorMessage
                  ? similarErrorMessage
                  : similarMovies.length === 0
                  ? 'No similar movies found'
                  : similarErrorMessage
              }
              RenderItem={({item}) => (
                <MovieCard
                  movie={item}
                  cardWidth={Device.SCREEN_WIDTH / 3}
                  cardHeight={Device.SCREEN_HEIGHT / 5}
                  onPress={() => {
                    // using push instead of navigate because we need to navigate back to MovieScreen
                    navigation.push(routes.MOVIE, {
                      movieId: item.id,
                      movie: item,
                    });
                  }}
                />
              )}
              noSeeMore
              className="mt-5"
            />
          </View>
        </ScrollView>
      )}
    </Screen>
  );
};

export default MovieScreen;

const CompanyItem = ({company}: {company: ICompany}) => {
  const cardHeight = Device.SCREEN_HEIGHT / 7;

  const imageCoverExist = !!company.logo_path;

  return (
    <View
      className={'rounded-full'}
      style={{
        width: cardHeight,
        height: cardHeight,
        alignItems: 'center',
        overflow: 'hidden',
        padding: imageCoverExist ? 10 : 0,
        backgroundColor: colors.light,
      }}>
      {imageCoverExist ? (
        <Image
          source={{uri: getImage500px(company.logo_path)}}
          style={{
            height: cardHeight - 20,
            width: cardHeight - 20,
            backgroundColor: colors.light,
          }}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={noImage}
          style={{
            height: cardHeight,
            width: cardHeight,
            backgroundColor: colors.light,
          }}
          resizeMode="contain"
        />
      )}

      {/* <AppText>{limitString(company.name, 12)}</AppText> */}
    </View>
  );
};
