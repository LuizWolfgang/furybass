import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
// import { BottomSheet } from 'react-native-btr';

import {
  Container,
  ErrorMessasge,
  IconContainer,
  InputText
} from './styles';


interface InputProps extends TextInputProps {
    iconName?: React.ComponentProps<typeof Feather>['name'];
    value?:string;
    error?: string;
    height?: boolean;
}
export function Input({
  iconName,
  value,
  height,
  ...rest
}: InputProps){

  const [isFocused, setIsFocused]=  useState(false);
  const [isFilled, setIsFilled]=  useState(false);

  function handleInputFocus(){
    setIsFocused(true);
  }

  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container heightDescription={height}>
      {/* <IconContainer
             isFocused={isFocused}
        >
            <Feather
                name={iconName}
                size={24}
                color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
            />
        </IconContainer>  */}

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        multiline
        style={{ textAlignVertical: 'top'}}
        {...rest}/>
    </Container>
  );
}
