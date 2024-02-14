import {View, Text, Button} from 'react-native';
import AppText from './AppText';
import {Screen} from './Screen';
import AppBottom from './AppBottom';

const CustomFallback = (props: {error: Error, resetError: Function}) => {
  return (
    <Screen className="flex-1 p-3 ">
      {/* Error */}
      <AppText className="pb-10 text-3xl">Something happened!</AppText>

      {/* Error */}
      <AppText className="w-full p-1 mb-4 text-lg text-red-700 border-2 border-red-500 bg-neutral-400">
        {props.error.toString()}
      </AppText>

      {/* Try again button */}
      <AppBottom
        className="absolute bottom-0"
        onPress={props.resetError}
        title={'Try again'}
      />
    </Screen>
  );
};

export default CustomFallback;
