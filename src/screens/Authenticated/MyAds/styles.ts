import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
     flex:1;
    background-color: ${({ theme }) => theme.colors.header};
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 10}px; ;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 14px ;
    flex-direction: row;
    height:60px ;
`

export const TouchIcon = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    align-items: center;
`
export const ContentTitle = styled.View`
    background-color: ${({ theme }) => theme.colors.header};
    width: 85%;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: 20px;
    color: ${({ theme }) => theme.colors.background_secondary};
`

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

export const ContentAd = styled.View`
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

export const ViewEmptyComponent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const TextEmpty = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`

export const TouchAddAd = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const TextAddAd= styled.Text`
  color: ${({ theme }) => theme.colors.success};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
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

