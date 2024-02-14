import React from 'react';
import {
  TouchableOpacity,
  TextStyle,
  StyleSheet,
  ViewStyle,
  Text,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';
import AppText from './AppText';

// @ts-ignore
interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  activeOpacity?: number;

  wrapperStyle?: ViewStyle;
  textStyle?: TextStyle;

  wrapperProps?: React.ComponentProps<typeof TouchableOpacity>;
  textProps?: React.ComponentProps<typeof Text>;

  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

// platform specific
const AppBottom = ({
  title,
  onPress,
  disabled,
  wrapperStyle,
  textStyle,
  wrapperProps,
  textProps,
  iconLeft,
  iconRight,
  loading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      //@ts-ignore
      className="rounded-lg bg-stone-200"
      style={[styles.button, disabled && styles.disabledButton, wrapperStyle]}
      {...wrapperProps}>
      {iconLeft}
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <AppText
          className="text-xl font-bold text-neutral-900"
          // @ts-ignore
          style={textStyle}
          {...textProps}>
          {title}
        </AppText>
      )}
      {iconRight}
    </TouchableOpacity>
  );
};

export default AppBottom;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // Add any additional styles or override default styles here
  },
  disabledButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
