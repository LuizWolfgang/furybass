import styled from "styled-components/native";

interface Props {
    color?: string;
}

interface ButtonTextProps {
    light: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;

    padding: 18px;

    align-items: center;
    justify-content: center;

    background-color: ${({ color }) => color};
    margin-bottom: 8px;

    border-radius: 10px;
`;

export const Title = styled.Text<ButtonTextProps>`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: 16px;
    color: ${({ theme, light }) =>
    light ? theme.colors.header : theme.colors.shape};
`;
