import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  Container, FilterIcon, Input, SearchIcon, Divider
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function SearchInput(){
  const navigation = useNavigation();
  return (
    <Container>
      <SearchIcon name="search" size={20} color="#666" />
      <Input placeholder="Buscar" placeholderTextColor="#999" />
      <Divider/>
      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <FilterIcon name="filter" size={20} color="#666" />
      </TouchableOpacity>
    </Container>
  );
}
