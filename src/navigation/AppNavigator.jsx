import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MoivesStack from './MoivesStack';

function AppNavigator() {
  console.log(`AppNavigator`);

  return (
    <NavigationContainer>
      <MoivesStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
