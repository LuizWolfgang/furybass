import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 14px ;
`;

export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 10}px; ;
    background-color: ${({ theme }) => theme.colors.header};


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
    margin-top: 8px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 14px;
`

export const ContentImageSlide = styled.View`

    background-color: ${({ theme }) => theme.colors.input} ;
    height: 70px;
    width: 70px;

`

export const ContentAddImage = styled.View`
    margin-top: 15px;
    background-color: ${({ theme, length }) => length === 0 ? theme.colors.input : theme.colors.header } ;
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
flex-direction: row;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: space-between;
    align-items: center ;
    width: 100%;
    margin-top:15px;
`
export const  CardTextAddImage = styled.TouchableOpacity`
    justify-content: center ;
    align-items: center ;

`
export const ContentIcons = styled.View`

`
export const TextAddImage = styled.Text`
    margin-top: 3px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 14px;
`

export const ContentTotal = styled.View`
    background-color:${({ theme }) => theme.colors.header} ;
    height: 50px;
`
export const TextTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: 12px;
`


// export const TouchAddImage = styled.TouchableOpacity`
//    align-items: center;
//    justify-content: center;

// `

