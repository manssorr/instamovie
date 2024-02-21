import MoviesScreen from '../screens/Movies.screen';
import MovieScreen from '../screens/Movie.screen';
import {routes} from '../utils/CONSTANTS';
import TrendingMoviesScreen from '../screens/TrendingMovies.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../screens/Test.screen';

const Stack = createNativeStackNavigator();

function MoivesStack() {
  return (
    <Stack.Navigator
      initialRouteName="TEST"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.TEST}
        component={TestScreen}
        options={({navigation}) => ({})}
      />
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
