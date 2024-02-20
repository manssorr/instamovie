import {StyleSheet, Animated, useAnimatedValue} from 'react-native';
import {Device, errors} from '../utils/CONSTANTS';
import AppText from './AppText';
import tailwindColors from 'tailwindcss/colors';
import {useConnectionStatus} from '../utils/ConnectionContext';
import {useEffect, useRef, useState} from 'react';

const Notice = ({
  show = false,
  backgroundColor = 'bg-blue-500',
  message,
}: {
  show: boolean,
  backgroundColor: tailwindColors,
  message: string,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;

  const showAnimation = () => {
    console.log('showAnimation');
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const hideAnimation = () => {
    console.log('hideAnimation');
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (show) {
      showAnimation();
    } else {
      hideAnimation();
    }
  }, [show]);

  return (
    <Animated.View
      style={[styles.$container, {opacity}]}
      className={
        'sticky top-0 justify-center w-full align-middle h-7 ' + backgroundColor
      }>
      <AppText className="font-semibold text-center text-white">
        {message}
      </AppText>
    </Animated.View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  $container: {
    width: Device.SCREEN_WIDTH,
  },
});
