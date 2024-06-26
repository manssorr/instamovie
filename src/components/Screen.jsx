import {Platform, ViewStyle, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {spaces} from '../utils/CONSTANTS';
import OfflineNotice from './OfflineNotice';

const edgesTabView = ['right', 'top', 'left'];
const fixTopTabView = ['right', 'left', 'bottom'];
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
  style,
  ...props
}: IProps) {
  const withPadding = !noPadding;
  const styles = styleSheet({...props, withPadding});

  useEffect(() => {
    console.log('Screen rendered');
  }, []);

  return (
    <>
      <View>
        <OfflineNotice />
      </View>
      <SafeAreaView
        className="container flex-1 bg-neutral-900"
        style={[styles.container, style]}
        edges={inTabView ? edgesTabView : fixTop ? fixTopTabView : undefined}
        {...props}>
        {children}
      </SafeAreaView>
    </>
  );
}

// use params
const styleSheet = (props: IProps | {withPadding: boolean}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: props.withPadding ? spaces.screenPadding : 0,
      paddingTop: 0,
    },
  });
