import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
`;

export const SearchIcon = styled(Ionicons)`
  margin-right: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

export const Divider = styled.View`
  height: 20px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.success};
`

export const FilterIcon = styled(Ionicons)`
  margin-left: 8px;
`;
