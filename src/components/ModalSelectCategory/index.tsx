import { Feather } from '@expo/vector-icons'

import {
  Container,
  HeaderContainer,
  TitleText,
  Content,
  CloseButton,
  Touch,
  Text
} from './styles';
import theme from '../../styles/theme';
import { ScrollView } from 'react-native';

type ContentModalProps = {
    onDismiss: () => void
    handleSelectCategory: (name: string) => void
}

const options = [
  {
    icon: '',
    value : 1,
    name : 'Carro ou Moto ou Jetski'
  },
  {
    icon: '',
    value : 2,
    name : 'Produto ou Som ou Peças ou Rodas'
  },
  {
    icon: '',
    value : 3,
    name : 'Serviços'
  },

]

export function ModalSelectCategory({ onDismiss, handleSelectCategory }: ContentModalProps ){
  return (
    <Container>
      <HeaderContainer>
        <CloseButton onPress={() => onDismiss()}>
          <Feather name="x-circle" size={24} color={theme.colors.main} />
        </CloseButton>
      </HeaderContainer>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}
      >
        {
          options.map((option) => {
            return (
              <Content key={option.value}>
                {/* <Feather name={option.icon} size={24}/> */}
                <Touch onPress={() => handleSelectCategory(option.name)}>
                  <Text key={option.value}>
                    {option.name}
                  </Text>
                </Touch>
              </Content>
            )
          })
        }
      </ScrollView>

      {

      }
    </Container>
  );
}
