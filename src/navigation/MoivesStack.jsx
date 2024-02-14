import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../screens/Movies.screen';
import MovieScreen from '../screens/Movie.screen';
import {colors, routes} from '../utils/CONSTANTS';
import Header from '../components/Header';
import {limitString} from '../utils/helperFunctions';

const Stack = createNativeStackNavigator();

function MoivesStack() {
  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen
        name={routes.MOVIES}
        component={MoviesScreen}
        options={({navigation}) => ({
          headerBackVisible: false,
          headerStyle: {backgroundColor: colors.dark},
          headerTitle: props => <Header title="Movies" {...props} />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name={routes.MOVIE}
        component={MovieScreen}
        options={({navigation, route}) => ({
          headerBackVisible: false,
          headerStyle: {backgroundColor: colors.dark},
          headerTitle: props => (
            <Header
              title={'Movie: ' + limitString(route.params.movie.title, 8)}
              {...props}
            />
          ),
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
}

export default MoivesStack;
