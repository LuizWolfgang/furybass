import React, { useEffect } from 'react';
import theme from '../../../styles/theme';

import {
  Container,
  ContentIcon,
  TouchIcon,
  CarrouselView,
  ContentInfoCar,
  ContentTitle,
  Title,
  YearInfo,
  Year,
  Price,
  ContentInfoYear,
  ContentInfoPrice,
  ContentAcessories,
  ContentDescription,
  ContentContact,
  DescriptionText,
  TextDescription,
  BorderTextDescription,
  PriceInfo
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



import { ImageSliderCars } from '../../../components/ImageSliderCars';
import { ScrollView } from 'react-native-gesture-handler';

import Animated, { FlipInYRight } from 'react-native-reanimated';
import { useFocusScreen } from '../../../hooks/useFocusScreen';
import { ImageSliderProducts } from '../../../components/ImageSliderProducts';


type Params = {
    any:any;
}

export function ProductDetails(){
  const route = useRoute()
  const { item } = route.params as Params;

  const navigation = useNavigation();
  const { isPlaying } = useFocusScreen();

  return (
    <Container>
      <ContentIcon>
        <TouchIcon onPress={() => navigation.goBack()} >
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
      </ContentIcon>
      <ScrollView
        contentContainerStyle={{ flexGrow:1, backgroundColor: theme.colors.header, paddingBottom: 20 }}>

        <CarrouselView>
          <ImageSliderProducts
            imagesUrl={
              data.media
            }
            paused={false}
            playFocus={isPlaying}
          />
        </CarrouselView>

        <ContentTitle>
          <Title>{data.name}</Title>
        </ContentTitle>

        <ContentInfoCar>

          <ContentInfoYear>
            <YearInfo>Marca</YearInfo>
            <Year>{data.year ? data.year : '---'}</Year>
          </ContentInfoYear>

          <Animated.View entering={FlipInYRight.delay(550)}>
            <ContentContact>
              <Ionicons name="logo-whatsapp" size={40} color="green" />
            </ContentContact>
          </Animated.View>

          <ContentInfoPrice>
            <PriceInfo>Preço</PriceInfo>
            <Price>{data.price}</Price>
          </ContentInfoPrice>

        </ContentInfoCar>

        <ContentAcessories>
          <ContentDescription>
            <DescriptionText>
                Descrição:
            </DescriptionText>
          </ContentDescription>
          <BorderTextDescription>
            <TextDescription>
            A Saveiro conta com uma identidade visual própria e muita inovação tecnológica. A picape da Volkswagen traz robustez, versatilidade e incorpora os sistemas de infotainment Volkswagen App-Connect, os mais modernos e interativos do mercado. O modelo conta ainda com três opções de carroceria (simples, estendida e dupla) e recursos de segurança como ESC (controle eletrônico de estabilidade) e freios ABS off-road.
            A Saveiro conta com uma identidade visual própria e muita inovação tecnológica. A picape da Volkswagen traz robustez, versatilidade e incorpora os sistemas de infotainment Volkswagen App-Connect, os mais modernos e interativos do mercado. O modelo conta ainda com três opções de carroceria (simples, estendida e dupla) e recursos de segurança como ESC (controle eletrônico de estabilidade) e freios ABS off-road.
            </TextDescription>
          </BorderTextDescription>

        </ContentAcessories>
      </ScrollView>
    </Container>
  );
}
