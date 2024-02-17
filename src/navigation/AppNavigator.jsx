import {NavigationContainer} from '@react-navigation/native';

import MoivesStack from './MoivesStack';

function AppNavigator() {
  return (
    <NavigationContainer>
      <MoivesStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
