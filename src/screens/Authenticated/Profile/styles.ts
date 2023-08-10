import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface OptionProps {
    active: boolean;
}

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

export const ContentPhotoProfile = styled(BorderlessButton)`
   background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
    align-items: center;
 `

export const PhotoContainer = styled.View`
    width: 180px;
    height: 180px;
    border-radius: 90px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

 `
export const Photo = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
 `
export const PhotoButton = styled(RectButton)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.success};

    position: absolute;
    bottom: 10px;
    right: 10px;
`

export const Content = styled.View`
    padding: 0 24px;
    margin-top: 50px;
`
export const Options = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme}) => theme.colors.line};

    flex-direction: row;
    justify-content: space-around;

    margin-bottom:24px;
`
export const OptionTitle = styled.Text<OptionProps>`
    font-size: ${RFValue(20)}px;

    font-family: ${({ theme, active }) =>
    active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};

    color: ${({ theme, active }) =>
    active ? theme.colors.success : theme.colors.text_detail};
`
export const Option = styled.TouchableOpacity<OptionProps>`
   padding-bottom: 14px;

    ${({ active }) => active && css`
        border-bottom-width: 3px;
        border-bottom-color: ${({ theme }) => theme.colors.success};
    `}
`

export const Section = styled.View`

`
