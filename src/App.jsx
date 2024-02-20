import {StatusBar} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/ErrorFallback';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  // return <TestScreen />;

  return (
    <SafeAreaProvider>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        {/* <Screen> */}
        <AppNavigator>
          <StatusBar barStyle="default" animated />
        </AppNavigator>
        {/* </Screen> */}
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

export default App;
