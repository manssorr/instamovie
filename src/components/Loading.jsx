import {PropsWithChildren} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AppText from './AppText';
import {colors} from '../utils/CONSTANTS';

interface Props extends PropsWithChildren<any> {
  title?: string;
}

const Loading = ({title = 'Loading...'}: Props) => {
  return (
    <View className="flex-col justify-center flex-1 align-middle ">
      <ActivityIndicator color={colors.light} />
      <AppText className="text-xl font-bold text-center text-white">
        {title ? title : 'Loading...'}
      </AppText>
    </View>
  );
};

export default Loading;
