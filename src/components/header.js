import {View, Text, Button} from 'react-native';

const Header = ({title}: {title: string}) => {
  return (
    <View className="flex-row items-center justify-center mx-4">
      <Text className="text-3xl font-bold text-white">Header</Text>
    </View>
  );
};
export default Header;
