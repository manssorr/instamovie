import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../screens/Movies.screen';
import MovieScreen from '../screens/Movie.screen';
import {routes} from '../utils/CONSTANTS';
import TrendingMoviesScreen from '../screens/TrendingMovies.screen';

const Stack = createNativeStackNavigator();

function MoivesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Movies"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.MOVIES}
        component={MoviesScreen}
        options={({navigation}) => ({})}
      />
      <Stack.Screen
        name={routes.MOVIE}
        component={MovieScreen}
        options={({navigation, route}) => ({})}
      />
      <Stack.Screen
        name={routes.TRENDING}
        component={TrendingMoviesScreen}
        options={({navigation, route}) => ({})}
      />
    </Stack.Navigator>
  );
}

export default MoivesStack;
