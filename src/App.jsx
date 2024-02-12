import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/errorFallback';
import AppNavigator from './navigation/AppNavigator';
import Header from './components/header';

const isIos = Platform.OS === 'ios';

function App(): React.JSX.Element {
  console.log(`App`);

  return (
    <AppNavigator>
      {/* // Fix SafeAreaView to specific platform */}
      <SafeAreaView className={isIos ? '-mb-20' : 'mb-3'}>
        <ErrorBoundary FallbackComponent={CustomFallback}>
          <StatusBar barStyle="light" />
        </ErrorBoundary>
      </SafeAreaView>
    </AppNavigator>
  );
}

export default App;
