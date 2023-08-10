import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const DIMENSIONS = Dimensions.get("screen").height;

export const Container = styled.View`
  background-color: ${({ theme}) => theme.colors.header};
  flex:1 ;
`;

export const ContentIcon = styled.View`
  margin-top: ${getStatusBarHeight() + 10}px; ;
  background-color: ${({ theme }) => theme.colors.header};
  justify-content: center;

  height:60px ;

`
export const TouchIcon = styled.TouchableOpacity`
    margin-left: 10px;
`
export const TitleFuryBass = styled.Text``

export const CarrouselView = styled.View`
  height: ${DIMENSIONS < 700 ? 300 : 400}px;

 `
export const ContentTitle = styled.View`
 margin-top: 28px;
 background-color: ${({ theme}) => theme.colors.header};
 align-items: center;
 justify-content:center;
 padding:  0px 10px;
`
export const Title = styled.Text`
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`;

export const  YearInfo = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`
export const PriceInfo = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`
export const ContentInfoCar = styled.View`
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.header};
  justify-content: space-between;
  padding: 0px 20px;
`

export const ContentInfoYear = styled.View`
 background-color: ${({ theme}) => theme.colors.header};
 align-items: center;
`
export const ContentInfoPrice = styled.View`
  align-items: center;
  background-color: ${({ theme}) => theme.colors.header};
`
export const ContentContact = styled.View`

    background-color: ${({ theme}) => theme.colors.header};

    margin-top: 20px;
    margin-left: 25px;
`
export const Year = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
`
export const Price = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
`
export const ContentAcessories = styled.View`
  background-color: ${({ theme}) => theme.colors.header};
  flex:1 ;
  width: 100% ;
  padding: 0px 15px;
`

export const ContentDescription = styled.View`
  background-color: ${({ theme}) => theme.colors.header};

  height: 40px;
  justify-content: center;
`
export const DescriptionText = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.background_secondary};
`
export const TextDescription = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.line};
`
export const BorderTextDescription = styled.View`
  border: 0.5px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 10px;
  padding-bottom: 10px;
`
