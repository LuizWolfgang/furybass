import React from 'react';
import { ScrollView } from 'react-native';
import {
  Container,
  Title,
  Content,
  Touch,
  Text
} from './styles';


const options = [
  {
    icon: '',
    value : 1,
    name : 'Carro - Moto - Jetski'
  },
  {
    icon: '',
    value : 2,
    name : 'Rodas - Pneus'
  },
  {
    icon: '',
    value : 3,
    name : 'Produto ou Serviço'
  },
]

export function ContentModal(){
  return (
    <Container>
      <Title>Selecione a categoria</Title>
      {
        options.map((option) => {
          return (
            <Content>
              <Touch>
                <Text key={option.value}>
                  {option.name}
                </Text>
              </Touch>

            </Content>
          )
        })
      }

    </Container>
  );
}
