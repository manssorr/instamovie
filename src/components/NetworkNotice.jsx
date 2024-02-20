import {View, StyleSheet} from 'react-native';
import {Device, errors} from '../utils/CONSTANTS';
import AppText from './AppText';
import useOffline from '../utils/hooks/useOffline';
import {useEffect, useState} from 'react';
import tailwindColors from 'tailwindcss/colors';
import NetInfo from '@react-native-community/netinfo';
import {useConnectionStatus} from '../utils/ConnectionContext';

const Notice = ({
  backgroundColor,
  message,
}: {
  backgroundColor: tailwindColors,
  message: string,
}) => {
  return (
    <View
      style={styles.$container}
      className={
        'sticky top-0 justify-center w-full align-middle h-7 ' + backgroundColor
      }>
      <AppText className="font-semibold text-center text-white">
        {message}
      </AppText>
    </View>
  );
};

const NetworkNotice = ({}) => {
  const {isConnected, showNotice} = useConnectionStatus();

  /**
   * we have 3 options
   * 1. show offline notice
   *    - always show no connection notice
   * 2. show back online notice
   *    - show when connected & tempShow is true
   * 3. do nothing
   *    - show when connected & tempShow is false
   */

  switch (true) {
    case !isConnected:
      return (
        <Notice
          backgroundColor="bg-red-500"
          message={errors.NO_CONNECTION_NOTICE}
        />
      );
    case isConnected && showNotice:
      return (
        <Notice
          backgroundColor="bg-green-500"
          message={errors.BACK_ONLINE_NOTICE}
        />
      );
    default:
      return null;
  }
};

export default NetworkNotice;

const styles = StyleSheet.create({
  $container: {
    width: Device.SCREEN_WIDTH,
  },
});
