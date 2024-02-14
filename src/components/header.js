import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

const Header = ({title, enableBack = false}: {title: string}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row border-green-500 border-6 ">
      {enableBack && (
        <Button title="Back" onPress={() => navigation.goBack()} />
      )}
      {title && (
        <Text className="text-3xl font-bold text-white border-red-500 border-6">
          {title}
        </Text>
      )}
    </View>
  );
};
export default Header;
