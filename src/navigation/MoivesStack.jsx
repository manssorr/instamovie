import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesScreen from '../screens/movies.screen';
import MovieScreen from '../screens/movie.screen';
import {routes} from '../utils/CONSTANTS';

const Stack = createNativeStackNavigator();

function MoivesStack() {
  console.log(`MoivesStack`);

  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen name={routes.MOVIES} component={MoviesScreen} />
      <Stack.Screen name={routes.MOVIE} component={MovieScreen} />
    </Stack.Navigator>
  );
}

export default MoivesStack;
