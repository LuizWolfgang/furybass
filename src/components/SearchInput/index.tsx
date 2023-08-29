import React, { useCallback, useMemo, useRef } from 'react';

import {
  Container, FilterIcon, Input, SearchIcon, Divider, ContentSearch,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


type searchProps = {
    onFilter: (data) => void;
    handleOpenModal: () => void;
    type?: 'Created' | 'Cars' | 'Products' | 'Services'
}

export function SearchInput({ onFilter,handleOpenModal, type }: searchProps) {
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

      <TouchableOpacity onPress={() => handleOpenModal()}>
        <FilterIcon name="filter" size={22} color="#666" />
      </TouchableOpacity>
    </Container>
  );
}
