import Carousel from 'react-native-snap-carousel';
import AppText from './AppText';
import {SafeAreaView, Image, View} from 'react-native';
import MovieCard from './MovieCard';
import Loading from './Loading';
import {Device, errors, routes} from '../utils/CONSTANTS';
import SectionHeaderComponent from './SectionHeaderComponent';
import {useNavigation} from '@react-navigation/native';
import Error from './Error';

const TrendingSection = ({data, isLoading, isError, errorMessage}) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 mb-2">
      <SectionHeaderComponent
        title="Trending"
        onSeeMore={() => navigation.navigate(routes.TRENDING)}
      />

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error customText={errorMessage} />
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <Carousel
            data={data}
            renderItem={({item}) => (
              <MovieCard
                movie={item}
                cardHeight={Device.SCREEN_HEIGHT * 0.4}
                cardWidth={Device.SCREEN_WIDTH * 0.6}
                className="rounded-3xl"
                noTitle
              />
            )}
            firstItem={1}
            ListEmptyComponent={<Error customText={errors.EMPTY} />}
            inactiveSlideOpacity={0.6}
            sliderWidth={Device.SCREEN_WIDTH}
            itemWidth={Device.SCREEN_WIDTH * 0.66}
            slideStyle={{display: 'flex', alignItems: 'center'}}
            loop
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default TrendingSection;
