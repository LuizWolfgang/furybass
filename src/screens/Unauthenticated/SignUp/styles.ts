import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 50px;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.main};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 90}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};
`;
export const SubTitle = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};

    color: ${({ theme }) => theme.colors.background_secondary};
    text-align: center;
    line-height: 20px;
    margin-top: 10px;
`;

export const Form = styled.View`
    margin: 64px 0;
`;
export const Footer = styled.View`
    width: 100%;
`;
export const Errors = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};

    margin-bottom: 24px;
`;
