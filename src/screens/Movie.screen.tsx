import {View, Text, Image, ScrollView} from 'react-native';
import {useRoute, type RouteProp} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Device,
  colors,
  fakeImage,
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
import {getMovie, getSimilarMovies} from '../utils/api/api';
import AppText from '../components/AppText';
import {Screen} from '../components/Screen';
import SectionList from '../components/SectionList';
import {limitString} from '../utils/helperFunctions';
import MovieCard from '../components/MovieCard';

const Genre = ({genre}: {genre: IGenre}) => {
  return (
    <View className="px-[5px] py-[2px] mx-1 font-semibold rounded-lg bg-orange-200">
      <AppText className="font-semibold text-neutral-700 ">
        {genre.name}
      </AppText>
    </View>
  );
};

const MovieScreen: React.FC = ({navigation}) => {
  const {
    params: {movieId},
  } = useRoute<RouteProp<ParamList, 'Movie'>>();

  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState<IFullMovie>();

  const fetchMovie = async () => {
    setIsLoading(true);
    const movieRes = await getMovie(movieId);
    const similarRes = await getSimilarMovies(movieId);
    setMovieInfo(movieRes);
    setSimilarMovies(similarRes.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // get movie info
    fetchMovie();
  }, [movieId]);

  // get the vote out of five, new_rate = (old_rate/10) * 5
  const starsCount: number = movieInfo
    ? // put + to corelate to number
      +((movieInfo.vote_average / 10) * 5).toFixed(0)
    : 0;

  // create string of starts by using Array.from method
  const stars = Array.from({length: starsCount}, _ => '⭐️').join('');

  // get release year
  const year = movieInfo
    ? new Date(movieInfo.release_date).getFullYear()
    : 'N/A';

  return (
    <Screen noPadding>
      {/* Screen Body */}
      {isLoading ? (
        <Loading title="Loading..." />
      ) : (
        <ScrollView>
          {/* Movie Poster Header */}
          <View className="">
            {/* Back image */}
            <Image
              source={
                movieInfo?.backdrop_path
                  ? {uri: getImage500px(movieInfo?.backdrop_path)}
                  : noImage
              }
              width={Device.SCREEN_WIDTH}
              height={Device.SCREEN_HEIGHT / 2}
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
              {movieInfo?.title}
            </Text>
            <Text className="text-sm tracking-wider text-center text-orange-200 ">
              {movieInfo?.tagline}
            </Text>

            {/* Info */}
            <Text className="justify-center mt-5 text-base font-semibold tracking-wider text-center align-middle text-neutral-400">
              {movieInfo?.status} • {year} • {stars}
            </Text>
            {/* Genres */}
            <View className="flex-row justify-center gap-2 mt-2">
              {movieInfo?.genres.map((genre, index) => (
                <Genre key={index} genre={genre} />
              ))}
            </View>
          </View>

          {/* Rest of body */}
          <View className="p-2">
            {/* Description */}
            {/* <View className="mt-5">
              <AppText className="text-base font-semibold tracking-wider text-neutral-400 text-start ">
                {movieInfo?.overview}
              </AppText>
            </View> */}

            {/* Cast */}

            {/* production_companies */}
            <SectionList<ICompany>
              headerTitle="Production Companies"
              data={movieInfo?.production_companies}
              RenderItem={({item}) => <CompanyItem company={item} />}
              isLoading={false}
              noSeeMore
              className="mt-5"
            />

            {/* Similar Movies */}
            <SectionList<IFullMovie>
              headerTitle="Similar Movies"
              data={similarMovies}
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
              fetchData={() => getSimilarMovies(movieId)}
              isLoading={false}
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
