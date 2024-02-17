import {useNavigation} from '@react-navigation/native';
import {Device, getImage, routes, spaces} from '../utils/CONSTANTS';
import {limitString} from '../utils/helperFunctions';
import {IMovie} from '../utils/types';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

const MovieCard = ({
  movie,
  cardWidth,
  cardHeight,
  onPress,

  noTitle,

  ...rest
}: {
  movie: IMovie,
  cardWidth?: number,
  cardHeight?: number,
  noTitle?: boolean,
}) => {
  const navigation = useNavigation();

  const navigateMovie = () => {
    navigation.navigate(routes.MOVIE, {
      movieId: movie.id,
      movie,
    });
  };

  /*
   * To make sure the space between cards is the same as the space around them, we adjust each card's width.
   * First, we subtract double the screen padding (for both sides) and the gap between cards from the screen's width.
   * This tells us how much space we have for the cards.
   * Then, we divide that space by 2 to find the width of a single card.
   * This way, the cards are evenly spaced on the screen.
   *
   * Calculation:
   * card_width = (screen_width - (2 * screen_padding + gap_between_cards)) / 2
   */

  const gap_between_cards = spaces.screenPadding;
  const card_width = cardWidth
    ? cardWidth // custom width
    : (Device.SCREEN_WIDTH - (2 * spaces.screenPadding + gap_between_cards)) /
      2;

  const card_height = cardHeight ? cardHeight : Device.SCREEN_HEIGHT / 4;

  const image = getImage(movie);

  return (
    <View style={{width: card_width}}>
      <TouchableWithoutFeedback onPress={onPress ? onPress : navigateMovie}>
        <View className="flex-col">
          {/* <Image source={{uri: `${BASE_URL}${movie.poster_path}`}} /> */}
          <Image
            source={image}
            className="rounded-2xl"
            resizeMode="cover"
            style={{height: card_height, width: card_width}}
          />
          {noTitle ? null : (
            <Text className="font-semibold text-white">
              {limitString(movie.title, 20)}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MovieCard;
