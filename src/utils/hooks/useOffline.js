import {useNetInfo} from '@react-native-community/netinfo';

const useOffline = () => {
  const netInfo = useNetInfo();
  // console.log(`netInfo`, JSON.stringify(netInfo, null, 2));

  const connectionLost =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  return !connectionLost;
};

export default useOffline;
