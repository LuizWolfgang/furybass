import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #f5f5f5;
    padding: 4px;
    width: 85%;
    border-radius: 10px;
`;

export const ViewModal = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

`

export const ContentSearch = styled.View`
    margin-left: 10px;
`

export const SearchIcon = styled(Ionicons)`
    margin-right: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

export const Divider = styled.View`
  height: 18px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.text};
`

export const FilterIcon = styled(Ionicons)`
  margin-left: 8px;
`;
