import styled from "styled-components/native";

export const Container = styled.View`

    justify-content: center;
`;

export const HeaderContainer = styled.View`
    align-items: flex-end;
    margin-right: 15px;

`;

export const TitleText = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.header};
`;

export const CloseButton = styled.TouchableOpacity``;

export const Content = styled.View`
    margin: 5px;
    margin-top: 10px;
    flex-direction: row;
`;
export const Touch = styled.TouchableOpacity`

`;

export const Text = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.text};
`;
