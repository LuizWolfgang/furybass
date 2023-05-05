import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Header = styled.View`
  width:100%;
  height:90px;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px 15px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex:1;
`
export const User = styled.View`
  margin-left: 17px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const UserPhoto = styled.View`
  height: 45px;
  width: 45px;
  border-radius:45px;
  background-color: ${({ theme }) => theme.colors.main};
`

export const ContentCars = styled.View`
  justify-content: center;
  align-items: center;


`
export const ContentMenu = styled.View`
    flex-direction: row ;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`

export const Content = styled.View`
   flex: 1;
`
export const ContentSearch = styled.View`
    padding: 0px 15px;

`

export const CarrouselView = styled.View`
  height: 270px;
  justify-content: flex-end;

 `
export const InfoCars = styled.View`
  background-color: ${({ theme }) => theme.colors.input};
  padding: 5px;
  align-items: center;
`

export const SubTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
  line-height: ${RFValue(25)}px;
`
export const Km = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.shape_dark};
`
export const Details = styled.TouchableOpacity`
     background-color: ${({ theme}) => theme.colors.success};
     height: 40px ;
     border-bottom-left-radius: 10px;
     border-bottom-right-radius: 10px;
     align-items: center;
     justify-content: center;
`
export const TitleDetails = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_primary};
`

