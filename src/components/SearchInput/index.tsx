import React, { useCallback, useMemo, useRef } from 'react';

import {
  Container, FilterIcon, Input, SearchIcon, Divider, ContentSearch, ViewModal
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ModalSelect } from '../ModalSelect';

type searchProps = {
    onFilter: (data) => void;
    type?: 'Created' | 'Cars' | 'Products' | 'Services'
}

export function SearchInput({ onFilter, type }: searchProps) {
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '35%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  },[])

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container>

      <ViewModal>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}

        >
          <>
            <ModalSelect
            //   handleSelectFilter={handleSelectFilter}
              type={type}
              onDismiss={handleDismissModalPress}
            />
          </>
        </BottomSheetModal>
      </ViewModal>

      <ContentSearch>
        <SearchIcon name="search" size={20} color="#666" />
      </ContentSearch>

      <Input
        placeholder="Buscar anúncio"
        placeholderTextColor="#999"
        onChangeText={onFilter}
      />

      <Divider/>

      <TouchableOpacity onPress={() => handlePresentModalPress()}>
        <FilterIcon name="filter" size={22} color="#666" />
      </TouchableOpacity>
    </Container>
  );
}
