import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../../../styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex:1;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 14px ;
`;


export const Header = styled.View`
    margin-top: ${getStatusBarHeight() + 10}px; ;
    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;
    flex-direction: row;
    height:60px ;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;

`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: 15px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
  background-color:  ${({ theme }) => theme.colors.success};

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
`;

