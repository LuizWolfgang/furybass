import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
const DIMENSIONS = Dimensions.get("screen").height;

type ContentAddImage = {
    length: number;
}


export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 14px ;
`;

export const CarrouselView = styled.View`

  justify-content: flex-end;
 `

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 10}px; ;
    background-color: ${({ theme }) => theme.colors.header};


    flex-direction: row;
    height:60px ;
`
export const TouchIconCloseMedia = styled.TouchableOpacity`
    z-index:2;
    position: absolute;
    top:6px;
    left: 310px;
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

export const Delete = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.main};
`

export const ContentInfoMedia = styled.View`
    background-color: ${({ theme }) => theme.colors.header};
    height: 70px;
    margin-top: 5px;
`
export const TitleInfoMedia = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 16px;
`
export const TextInfoImage = styled.Text`
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 14px;
    text-align: center;
`

export const ContentImageSlide = styled.View`

    background-color: ${({ theme }) => theme.colors.input} ;
    height: 70px;
    width: 70px;

`

export const ContentAddImage = styled.View<ContentAddImage>`
    margin-top: 15px;
    background-color: ${({ theme, length }) => length === 0 ? theme.colors.input : theme.colors.header} ;
    height: 200px;
    width: 100%;
`

export const CardAddImage = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.title};
    width: 100%;
    height: 200px;
    border: 1px;
    border-color: ${({ theme }) => theme.colors.background_secondary};
    justify-content: center;
    align-items: center;
`
export const ContentTextAddImage = styled.View`

    background-color: ${({ theme }) => theme.colors.success};
`
export const  CardTextAddImage = styled.TouchableOpacity`
    background-color:${({ theme }) => theme.colors.header};
    flex-direction: row;
    gap: 8px;

    margin-top: 8px;

`
export const ContentIcons = styled.View``

export const TextAddImage = styled.Text`
    margin-top: 3px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 14px;
`

export const ContentTotal = styled.View`
    background-color:${({ theme }) => theme.colors.header} ;
    height: 40px;
    justify-content: flex-start;
`
export const TextTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 12px;
`

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: center ;
  align-items: center;

  margin-top: 10px;
`

export const Form = styled.View`
  margin: 55px 0px;

  width: 100%;
`
export const Errors = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.background_secondary};

  margin-bottom: 24px;
`
export const Footer = styled.View`
  width: 100%
`
