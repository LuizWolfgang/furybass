import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native';

interface Props{
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width:100%;
  margin-bottom: 8px;
  height:45px;
  border-radius: 10px;
  margin-bottom:15px;
`;

export const IconContainer = styled.View<Props>`
  height:55px;
  width:55px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 2px;
  border-right-color: ${({ theme }) => theme.colors.background_secondary};


  background-color: ${({ theme}) => theme.colors.background_secondary};


 ${({ isFocused, theme }) => isFocused && css `
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};

  `};
`

export const InputText = styled(TextInput)<Props>`
  flex:1;
  border-radius: 10px;
  background-color: ${({ theme}) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  padding: 0 23px;

  ${({ isFocused, theme }) => isFocused && css `
  border-bottom-width: 2px;
  border-bottom-color: ${theme.colors.main};

  `};

`;

export const ErrorMessasge = styled.Text`
 font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.success}
`
