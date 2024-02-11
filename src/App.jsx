import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import MoviesList from './components/moviesList';

function App(): React.JSX.Element {
  return (
    <SafeAreaView className={'flex-1    bg-black'}>
      {/* <View className="bg-black">
        <MoviesList />
      </View> */}
      {/* <View className="bg-black h-3 w-3" /> */}
    </SafeAreaView>
  );
}

export default App;
