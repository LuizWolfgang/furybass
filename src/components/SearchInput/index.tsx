import React from 'react';

import {
  Container, FilterIcon, Input, SearchIcon, Divider, ContentSearch
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type searchProps = {
    onFilter: (data) => void;
}

export function SearchInput({ onFilter }: searchProps) {
  const navigation = useNavigation();
  return (
    <Container>
      <ContentSearch>
        <SearchIcon name="search" size={20} color="#666" />
      </ContentSearch>

      <Input
        placeholder="Buscar anúncio"
        placeholderTextColor="#999"
        onChangeText={onFilter}
      />

      <Divider/>

      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <FilterIcon name="filter" size={22} color="#666" />
      </TouchableOpacity>
    </Container>
  );
}
