import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native';

interface Props{
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width:100%;
  height:45px;
  margin-bottom: 8px;
  border-radius: 10px;
  margin-bottom:15px;

`;

export const IconContainer = styled.View<Props>`
  width:100%;
  height:45px;
  justify-content: center;
  align-items: center;
  margin-right:20px;
  background-color: ${({ theme}) => theme.colors.background_secondary};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;


  ${({ isFocused, theme }) => isFocused && css `
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};

  `};
`

export const InputText = styled(TextInput)<Props>`
  flex:1;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${({ theme}) => theme.colors.background_secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;


  ${({ isFocused, theme }) => isFocused && css `
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};



  `};

`;


