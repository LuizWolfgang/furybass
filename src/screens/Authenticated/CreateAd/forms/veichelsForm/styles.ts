import styled from 'styled-components/native';

export const Form = styled.View`
  margin-top: 5px;

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
