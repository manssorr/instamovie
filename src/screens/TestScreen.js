import {View} from 'react-native';
import AppButtom from '../components/AppBottom';
import {Screen} from '../components/Screen';
import Notice from '../components/Notice';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../utils/CONSTANTS';

const TestScreen = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  const showNotice = () => {
    setShow(true);
  };
  const hideNotice = () => {
    setShow(false);
  };

  return (
    <Screen className="flex-1" noPadding fixTop={false}>
      <Notice show={show} backgroundColor="bg-blue-500" message="Test Notice" />
      <View className="flex-1 ">
        <AppButtom
          title="Show Notice"
          onPress={showNotice}
          wrapperStyle={{marginBottom: 20}}
        />
        <AppButtom
          title="test"
          onPress={() => console.log('test')}
          wrapperStyle={{marginBottom: 20}}
        />
        <AppButtom
          title="Hide Notice"
          onPress={hideNotice}
          wrapperStyle={{marginBottom: 20}}
        />
        <AppButtom
          title="Home"
          onPress={() => navigation.navigate(routes.MOVIES)}
          wrapperStyle={{marginBottom: 20}}
        />
      </View>
    </Screen>
  );
};

export default TestScreen;
