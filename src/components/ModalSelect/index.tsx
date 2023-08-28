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
import { optionsFilterCar, optionsFilterProducts, optionsFilterService } from '../../utils/optionsFilter';


type ContentModalProps = {
    onDismiss: () => void
    handleSelectCountry: (country: string) => void
    type?: 'Created' | 'Cars' | 'Products' | 'Services'
}
export function ModalSelect({ onDismiss, handleSelectCountry, type}: ContentModalProps ){

  const handleSelectCountryModal = (country: string) => {
    handleSelectCountry(country);
    onDismiss();
  }

  const RenderForm = ({ value }) => {
    switch (value) {
    case 'Cars':
    case 'Products':
      return (
        <>
          {
            optionsFilterProducts.map((optionFilter) => {
              return (
                <Content key={optionFilter.key}>
                  {/* <Feather name={option.icon} size={24}/> */}
                  <Touch onPress={() => handleSelectCountryModal(optionFilter.key)}>
                    <Text key={optionFilter.key}>
                      {optionFilter.name}
                    </Text>
                  </Touch>
                </Content>
              )
            })
          }
        </>
      );
    case 'Services':
      return (
        <>
          {
            optionsFilterService.map((optionFilter) => {
              return (
                <Content key={optionFilter.key}>
                  <Touch onPress={() => handleSelectCountryModal(optionFilter.key)}>
                    <Text key={optionFilter.key}>
                      {optionFilter.name}
                    </Text>
                  </Touch>
                </Content>
              )
            })
          }
        </>
      );
    default:
      return (
        <>
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
        </>
      );
    }
  };

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onPress={() => onDismiss()}>
          <Feather name="x-circle" size={24} color={theme.colors.main} />
        </CloseButton>
      </HeaderContainer>
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 80}}
      >
        <RenderForm value={type ? type : undefined} />

      </ScrollView>
    </Container>
  );
}
