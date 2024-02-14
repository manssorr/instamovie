import Carousel from 'react-native-snap-carousel';
import AppText from './AppText';
import {TouchableWithoutFeedback, Image, View} from 'react-native';
import MovieCard from './MovieCard';
import Loading from './Loading';
import {Device, routes} from '../utils/CONSTANTS';
import SectionHeaderComponent from './SectionHeaderComponent';
import {useNavigation} from '@react-navigation/native';

const TrendingSection = ({data}) => {
  const navigation = useNavigation();
  return (
    <View className="mb-8">
      <SectionHeaderComponent
        title="Trending"
        onSeeMore={() => navigation.navigate(routes.TRENDING)}
      />

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
        inactiveSlideOpacity={0.6}
        sliderWidth={Device.SCREEN_WIDTH}
        itemWidth={Device.SCREEN_WIDTH * 0.66}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        loop
      />
    </View>
  );
};

export default TrendingSection;
