import React, { useCallback, useMemo, useRef } from 'react';

import {
  Container,
} from './styles';

import { Button } from '../Button';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { View, Text } from 'react-native';

export function ModalComponent(){
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <Container>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View>
          <Text>Selecione a categoria</Text>
        </View>
      </BottomSheetModal>
    </Container>
  );
}
