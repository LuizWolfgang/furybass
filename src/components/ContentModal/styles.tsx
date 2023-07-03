import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center ;
    align-items: center;
    color: ${({ theme }) => theme.colors.placeholder};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  margin: 20px;
`

export const Content = styled.View`
    padding: 10px;

`
export const Touch = styled.TouchableOpacity``

export const Text = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.placeholder};
`
