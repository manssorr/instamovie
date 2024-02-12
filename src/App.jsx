import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Button,
  View,
  Text,
} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {NavigationContainer} from '@react-navigation/native';

import MoviesList from './components/moviesList';

const isIos = Platform.OS === 'ios';

const ComponentWithError = () => {
  React.useEffect(() => {
    throw new Error('This is a test error thrown by ComponentWithError.');
  }, []);

  return null;
};

const CustomFallback = (props: {error: Error, resetError: Function}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} />
  </View>
);

function App(): React.JSX.Element {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);

  return (
    <ErrorBoundary FallbackComponent={CustomFallback}>
      <NavigationContainer>
        <View className="flex-1 bg-neutral-900">
          {/* Fix SafeAreaView to specific platform */}
          <SafeAreaView className={isIos ? '-mb-20' : 'mb-3'}>
            <StatusBar barStyle="light" />
            <Header title="Movies" />
            <MoviesList />
            <Button
              title="Throw error"
              onPress={() => setIsErrorComponentVisible(true)}
            />
          </SafeAreaView>
          {isErrorComponentVisible && <ComponentWithError />}
        </View>
      </NavigationContainer>
    </ErrorBoundary>
  );
}

export default App;

const Header = ({title}: {title: string}) => {
  return (
    <View className="flex-row items-center justify-center mx-4">
      <Text className="text-3xl font-bold text-white">Header</Text>
    </View>
  );
};
