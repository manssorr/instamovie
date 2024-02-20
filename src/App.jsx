import {StatusBar} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import CustomFallback from './components/ErrorFallback';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {
  ConnectionProvider,
  useConnectionStatus,
} from './utils/ConnectionContext';

function App() {
  const {isConnected} = useConnectionStatus();

  return (
    <SafeAreaProvider>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <ConnectionProvider>
          <AppNavigator>
            <StatusBar barStyle="default" animated />
          </AppNavigator>
        </ConnectionProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

export default App;
