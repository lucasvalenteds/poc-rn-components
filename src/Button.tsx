import React, {useEffect, useState} from 'react';
import {TextStyle, TouchableOpacity, Text, ViewStyle} from 'react-native';

interface BaseButtonProps extends DSButton {
  textStyle: TextStyle;
  viewStyle: ViewStyle;

  delayPressIn?: number;
  delayPressOut?: number;

  onPressIn?(): void;
  onPressOut?(): void;
}

const BaseButton: React.FC<BaseButtonProps> = (props): React.ReactElement => (
  <>
    <TouchableOpacity {...props} style={props.viewStyle} activeOpacity={1}>
      <Text style={props.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  </>
);

export interface DSButton {
  onPress?(): void;
}

export const PrimaryButton: React.FC<DSButton> = (
  props,
): React.ReactElement => {
  const [bgNormal, bgPressed] = ['#3A659E', '#D7D8DC'];
  const [colorNormal, colorPressed] = ['#FFFFFF', '#3A659E'];

  const [bg, setBg] = useState(bgNormal);
  const [color, setColor] = useState(colorNormal);
  const [isPressed, setPressed] = useState(false);

  useEffect(() => {
    if (isPressed === true) {
      setBg(bgPressed);
      setColor(colorPressed);
    } else {
      setBg(bgNormal);
      setColor(colorNormal);
    }
  }, [bgNormal, bgPressed, colorNormal, colorPressed, isPressed]);

  return (
    <BaseButton
      {...props}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      delayPressIn={25}
      delayPressOut={25}
      textStyle={{
        color: color,
        fontSize: 18,
        fontFamily: 'monospace',
        textAlignVertical: 'center',
        height: '100%',
      }}
      viewStyle={{
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: bg,
      }}
    />
  );
};

export const SecondaryButton: React.FC<DSButton> = (
  props,
): React.ReactElement => {
  return (
    <BaseButton
      {...props}
      textStyle={{
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Roboto',
        textAlignVertical: 'center',
        height: '100%',
      }}
      viewStyle={{
        width: '100%',
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        backgroundColor: '#DA291C',
      }}
    />
  );
};
