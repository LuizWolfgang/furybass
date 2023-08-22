import { Feather } from '@expo/vector-icons'

import {
  Container,
  HeaderContainer,
  Content,
  CloseButton,
  Touch,
  Text
} from './styles';
import theme from '../../styles/theme';
import { ScrollView } from 'react-native';
import { brazilianStates } from '../../utils/brazilianStates';


type ContentModalProps = {
    onDismiss: () => void
    handleSelectCountry: (country: string) => void
}
export function ModalSelect({ onDismiss, handleSelectCountry }: ContentModalProps ){

  const handleSelectCountryModal = (country: string) => {
    handleSelectCountry(country);
    onDismiss();
  }

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onPress={() => onDismiss()}>
          <Feather name="x-circle" size={24} color={theme.colors.main} />
        </CloseButton>
      </HeaderContainer>
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 80}}
      >
        {
          brazilianStates.map((option) => {
            return (
              <Content key={option.key}>
                {/* <Feather name={option.icon} size={24}/> */}
                <Touch onPress={() => handleSelectCountryModal(option.key)}>
                  <Text key={option.key}>
                    {option.name}
                  </Text>
                </Touch>
              </Content>
            )
          })
        }
      </ScrollView>
    </Container>
  );
}
