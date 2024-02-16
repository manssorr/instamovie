import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {Device} from '../utils/CONSTANTS';
import AppText from './AppText';

const OfflineNotice = ({}) => {
  const netInfo = useNetInfo();

  const noConnection =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  const connected = !noConnection;

  if (connected) return null;
  return (
    <View
      style={styles.container}
      className="sticky top-0 justify-center w-full align-middle bg-red-500 h-7">
      <AppText className="font-semibold text-center text-white">
        No Internet Connection
      </AppText>
    </View>
  );
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    width: Device.SCREEN_WIDTH,
  },
});
