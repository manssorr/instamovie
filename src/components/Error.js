import {View} from 'react-native';
import AppText from './AppText';
import {errors} from '../utils/CONSTANTS';

interface IProps {
  customText?: string;
}

const Error = ({customText = errors.GENERIC}): React.ReactElement<IProps> => {
  return (
    <View className="py-2 rounded-sm bg-neutral-800">
      <AppText className="self-center w-4/6 text-center text-neutral-300 ">
        {customText}
      </AppText>
    </View>
  );
};

export default Error;
