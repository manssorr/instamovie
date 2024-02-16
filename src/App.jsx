import React, {useEffect} from 'react';
import {Button, StatusBar, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/ErrorFallback';
import AppNavigator from './navigation/AppNavigator';
import Header from './components/Header';
import AppBottom from './components/AppBottom';
import {Screen} from './components/Screen';
import OfflineNotice from './components/OfflineNotice';
import TestScreen from './screens/TestScreen';
import {colors} from './utils/CONSTANTS';

function App() {
  const [isOffline, setIsOffline] = React.useState(false);
  console.log(`App isOffline`, isOffline);

  useEffect(() => {
    if (isOffline) {
      setTimeout(() => {
        setIsOffline(false);
      });
    }
  }, [isOffline]);

  // return <TestScreen />;

  return (
    <ErrorBoundary FallbackComponent={CustomFallback}>
      {/* <Screen> */}
      <AppNavigator>
        <StatusBar barStyle="default" animated />
      </AppNavigator>
      {/* </Screen> */}
    </ErrorBoundary>
  );
}

export default App;
