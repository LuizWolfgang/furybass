import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import theme from '../../styles/theme'

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
}
export function Input({
  iconName,
  value,
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
    <Container>
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
        {...rest}/>

    </Container>
  );
}