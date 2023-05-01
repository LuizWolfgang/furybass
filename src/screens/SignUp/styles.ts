import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 50px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.main};
`

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 90}px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};
`
export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};

  color: ${({ theme }) => theme.colors.background_secondary};
  text-align: center;
  line-height: ${RFValue(20)}px;
  margin-top: 10px;
`

export const Form = styled.View`
  margin: 64px 0;
`
export const Footer = styled.View`
  width: 100%;
`
export const Errors = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 24px;
`
