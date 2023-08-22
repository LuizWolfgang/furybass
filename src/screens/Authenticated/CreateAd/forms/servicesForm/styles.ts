import styled from 'styled-components/native';

export const Form = styled.View`
  margin-top: 5px;

  width: 100%;
`

export const ViewModal =  styled.View`
    margin-bottom: 5px;
`

export const Errors = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.main};

  margin-bottom: 5px;
  margin-left: 2px;
`

export const Footer = styled.View`
  width: 100%
`
