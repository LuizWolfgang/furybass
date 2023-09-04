import { Feather } from '@expo/vector-icons'

import {
  Container,
  HeaderContainer,
  Content,
  CloseButton,
  Touch,
  Text,
  TitleText
} from './styles';

import { ScrollView } from 'react-native';
import { brazilianStates } from '../../utils/brazilianStates';
import {
  optionsFilterCars,
  optionsFilterProducts,
  optionsFilterService } from '../../utils/optionsFilter';
import theme from '../../styles/theme';


type ContentModalProps = {
    handleSelectValue: (value: string) => void
    type?: 'Created' | 'Cars' | 'Products' | 'Services'
}
export function ModalSelect({ handleSelectValue, type}: ContentModalProps ){

  const handleSelectValueModal = (value: string) => {
    handleSelectValue(value);
  }

  const RenderForm = ({ value }) => {
    switch (value) {
    case 'Cars':
      return (
        <>
          {
            optionsFilterCars.map((optionFilter) => {
              return (
                <Content key={optionFilter.key}>
                  {/* <Feather name={option.icon} size={24}/> */}
                  <Touch onPress={() => handleSelectValueModal(optionFilter.name)}>
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
    case 'Products':
      return (
        <>
          {
            optionsFilterProducts.map((optionFilter) => {
              return (
                <Content key={optionFilter.key}>
                  {/* <Feather name={option.icon} size={24}/> */}
                  <Touch onPress={() => handleSelectValueModal(optionFilter.name)}>
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
                  <Touch onPress={() => handleSelectValueModal(optionFilter.name)}>
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
                  <Touch onPress={() => handleSelectValueModal(option.name)}>
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
        <CloseButton>
          {type ? <TitleText>Selecione o filtro: </TitleText> : <TitleText>Selecione o estado: </TitleText> }
        </CloseButton>
      </HeaderContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow:1, justifyContent: 'center', alignItems: 'center', paddingBottom: 40}}
      >
        <RenderForm value={type ? type : undefined} />

      </ScrollView>
    </Container>
  );
}
