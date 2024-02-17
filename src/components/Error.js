import {View} from 'react-native';
import AppText from './AppText';
import {errors} from '../utils/CONSTANTS';

interface IProps {
  customText?: string;
}

const Error = ({customText = errors.GENERIC}): React.ReactElement<IProps> => {
  return (
    <View className="flex-col justify-center flex-1 align-middle bg-neutral-900">
      <AppText className="text-center text-white">{customText}</AppText>
    </View>
  );
};

export default Error;
