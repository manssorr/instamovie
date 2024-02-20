import {PropsWithChildren} from 'react';
import {Text, StyleSheet, TextStyle, StyleProp} from 'react-native';
import {colors} from '../utils/CONSTANTS';

interface Props extends PropsWithChildren<any> {
  style?: TextStyle | (TextStyle | StyleProp<TextStyle>)[];
}

const AppText = ({children, style, ...props}: Props) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});
