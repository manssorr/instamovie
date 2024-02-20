import {NavigationContainer} from '@react-navigation/native';

import MoivesStack from './MoivesStack';
import {navigationRef, useBackButtonHandler} from './navigationUtilities';

import {type IMovie} from '../utils/types';
import Config from '../config';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Movies: undefined;
  Movie: {movie: IMovie; movieId: string};
  Trending: undefined;
};

const exitRoutes = Config.exitRoutes;

function AppNavigator() {
  useBackButtonHandler(routeName => exitRoutes.includes(routeName));

  return (
    <NavigationContainer ref={navigationRef} {...Config.persistNavigation}>
      <MoivesStack />
    </NavigationContainer>
  );
}

export default AppNavigator;

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
