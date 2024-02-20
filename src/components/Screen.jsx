import {Platform, ViewStyle, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {spaces} from '../utils/CONSTANTS';
import NetworkNotice from './NetworkNotice';
import {useSafeAreaInsetsStyle} from '../utils/hooks/useSafeAreaInsetsStyle';

const isIos = Platform.OS === 'ios';

interface IProps extends React.ComponentProps<typeof SafeAreaView> {
  inTabView?: boolean;
  style?: ViewStyle;
  children?: React.ReactNode;
  noPadding?: boolean;
  fixTop?: boolean;
}

export function Screen({
  children,
  inTabView = false,
  fixTop = isIos,
  noPadding = false,
  style: $styleOverride,

  ...props
}: IProps) {
  const withPadding = !noPadding;
  const styles = styleSheet({...props, withPadding});

  const $containerInsets = useSafeAreaInsetsStyle(
    [fixTop ? '' : 'top', 'bottom'],
    'padding',
  );

  return (
    <View
      className="flex-1 bg-neutral-900"
      style={[styles.$container, $containerInsets, $styleOverride]}>
      <NetworkNotice />

      {children}
    </View>
  );
}

// use params
const styleSheet = (props: IProps | {withPadding: boolean}) =>
  StyleSheet.create({
    $container: {
      // flex: 1,
      padding: props.withPadding ? spaces.screenPadding : 0,
    },
  });
