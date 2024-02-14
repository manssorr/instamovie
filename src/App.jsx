import React from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/ErrorFallback';
import AppNavigator from './navigation/AppNavigator';
import Header from './components/Header';
import AppBottom from './components/AppBottom';
import {Screen} from './components/Screen';

function App() {
  console.log(`App`);

  return (
    <ErrorBoundary FallbackComponent={CustomFallback}>
      {/* <Screen> */}
      <AppNavigator>
        <StatusBar barStyle="light" />
      </AppNavigator>
      {/* </Screen> */}
    </ErrorBoundary>
  );
}

export default App;
