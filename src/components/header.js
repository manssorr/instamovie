import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {Icon} from './AppIcon';
import {colors} from '../utils/CONSTANTS';

const Header = ({title, enableBack = false}: {title: string}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row justify-start w-full align-middle">
      {enableBack && (
        <Icon
          onPress={() => navigation.goBack()}
          size={30}
          icon="back"
          color={colors.light}
          className="py-4 pr-8 "
        />
      )}
      {title && (
        <Text className="absolute w-full text-3xl font-bold text-center text-white">
          {title}
        </Text>
      )}
    </View>
  );
};
export default Header;
