import React from 'react';
import { Entypo } from '@expo/vector-icons'
import {
  Container,
} from './styles';

export function ButtonNewSale({ focused, size, color}){
  return (
    <Container>
      <Entypo name="plus" color={color} size={size}/>
    </Container>
  );
}