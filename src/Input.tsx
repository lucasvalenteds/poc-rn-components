import React, {useState, useEffect} from 'react';
import {ViewStyle, TextStyle, TextInput} from 'react-native';

interface BaseInput extends InputProps {
  viewStyle: ViewStyle;
  textStyle: TextStyle;
}

const BaseInput: React.FC<BaseInput> = (props): React.ReactElement => (
  <>
    <TextInput {...props} style={{...props.textStyle, ...props.viewStyle}} />
  </>
);

export interface InputProps {
  placeholder?: string;
  value?: string;

  onChangeText?(text: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

export const DefaultInput: React.FC<InputProps> = (
  props,
): React.ReactElement => {
  const [blue, gray] = ['#3A659E', '#D7D8DC'];

  const [borderColor, setBorderColor] = useState<string>(gray);
  const [isFocused, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      setBorderColor(blue);
    } else {
      setBorderColor(gray);
    }
  }, [isFocused, blue, gray]);

  return (
    <BaseInput
      {...props}
      onFocus={() => {
        setFocus(true);
        props.onFocus && props.onFocus();
      }}
      onBlur={() => {
        setFocus(false);
        props.onBlur && props.onBlur();
      }}
      textStyle={{}}
      viewStyle={{
        paddingStart: 8,
        paddingEnd: 8,
        borderColor: borderColor,
        borderRadius: 5,
        borderWidth: 1.5,
      }}
    />
  );
};
