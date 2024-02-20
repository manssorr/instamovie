import AppText from './AppText';
import {Screen} from './Screen';
import AppBottom from './AppBottom';
import {useSafeAreaInsetsStyle} from '../utils/hooks/useSafeAreaInsetsStyle';
import {StyleSheet} from 'react-native';

const CustomFallback = (props: {error: Error, resetError: Function}) => {
  const $containerInsets = useSafeAreaInsetsStyle(['top'], 'padding');

  return (
    <Screen style={[styles.$container, $containerInsets]}>
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

const styles = StyleSheet.create({
  $container: {
    flex: 1,
    paddingTop: 5,
  },
});
