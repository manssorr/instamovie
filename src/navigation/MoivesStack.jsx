import MoviesScreen from '../screens/Movies.screen';
import MovieScreen from '../screens/Movie.screen';
import {routes} from '../utils/CONSTANTS';
import TrendingMoviesScreen from '../screens/TrendingMovies.screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
// const Stack = createSharedElementStackNavigator();

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
        // sharedElements={(route, otherRoute, showing) => {
        //   const {movie} = route.params;
        //   return [`movie.${movie.id}.photo`];
        // }}
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
