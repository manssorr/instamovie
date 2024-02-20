import {StyleSheet} from 'react-native';
import {Device, errors} from '../utils/CONSTANTS';
import {useConnectionStatus} from '../utils/ConnectionContext';
import Notice from './Notice';

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
          show
          backgroundColor="bg-red-500"
          message={errors.NO_CONNECTION_NOTICE}
        />
      );
    case isConnected && showNotice:
      return (
        <Notice
          show
          backgroundColor="bg-green-500"
          message={errors.BACK_ONLINE_NOTICE}
        />
      );
    default:
      return null;
  }
};

export default NetworkNotice;
