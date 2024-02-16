import {NavigationContainer} from '@react-navigation/native';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import MoivesStack from './MoivesStack';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from '../components/ErrorFallback';

const isIos = Platform.OS === 'ios';

function AppNavigator() {
  return (
    <NavigationContainer>
      <MoivesStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
