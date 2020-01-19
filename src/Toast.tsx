import React from 'react';
import {ViewStyle, TextStyle, View, Text} from 'react-native';

interface BaseToastProps extends ToastProps {
  viewStyle: ViewStyle;
  textStyle: TextStyle;
}

const BaseToast: React.FC<BaseToastProps> = (props): React.ReactElement => (
  <>
    <View {...props} style={props.viewStyle}>
      <Text {...props} style={props.textStyle}>
        {props.children}
      </Text>
    </View>
  </>
);

export interface ToastProps {}

export const DefaultToast: React.FC<ToastProps> = (
  props,
): React.ReactElement => {
  return (
    <BaseToast
      {...props}
      textStyle={{
        color: 'white',
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
      }}
      viewStyle={{
        position: 'absolute',
        top: 0,
        start: 0,
        width: '100%',
        height: 40,
        backgroundColor: '#3A659E',
      }}
    />
  );
};
