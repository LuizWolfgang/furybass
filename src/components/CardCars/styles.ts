import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const DIMENSIONS = Dimensions.get("screen").height;

export const Container = styled.View`
  width: 100%;
  min-height: 340px;
  background-color: ${({ theme}) => theme.colors.header};
  border-radius:10px;
  margin-bottom: 70px ;
`;

export const CarrouselView = styled.View`
  height: ${DIMENSIONS < 700 ? 300 : 400}px;
  justify-content: flex-end;

 `
export const InfoCars = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 5px;
  align-items: center;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.background_primary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const SubTitle = styled.Text`
  font-size:14px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
  line-height: 25px;
`
export const Km = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.background_primary};
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
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.background_primary};
`
