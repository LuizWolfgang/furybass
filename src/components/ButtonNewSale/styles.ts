import styled from 'styled-components/native';

type containerProps = {
    focused: boolean
}

export const Container = styled.View<containerProps>`
  width: 60px;
  height: 60px;
  border-radius:30px;
  background-color: ${({ theme, focused }) => focused ? theme.colors.placeholder : theme.colors.success};
  align-items: center;
  justify-content: center;
  margin-bottom:20px;
`;

