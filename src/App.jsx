import {StatusBar} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/ErrorFallback';
import AppNavigator from './navigation/AppNavigator';

function App() {
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
