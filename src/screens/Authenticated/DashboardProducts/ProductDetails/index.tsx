import React, { useEffect } from 'react';
import theme from '../../../../styles/theme';

import {
  Container,
  ContentIcon,
  TouchIcon,
  CarrouselView,
  ContentTitle,
  Title,
  YearInfo,
  Year,
  Price,
  ContentInfoPrice,
  ContentDescription,
  ContentContact,
  TextDescription,
  BorderTextDescription,
  PriceInfo,
  City,
  ContentInfo,
  ContentInfoType
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import { ScrollView } from 'react-native';

import Animated, { FlipInYRight } from 'react-native-reanimated';
import { useFocusScreen } from '../../../../hooks/useFocusScreen';
import { ImageSliderProducts } from '../../../../components/ImageSliderProducts';


type Params = {
    any:any;
}

export function ProductDetails(){
  const route = useRoute()
  const {isPlaying} = useFocusScreen();
  const { data } = route.params as Params;
  const navigation = useNavigation();

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
          <City>{data.city}-{data.country}</City>
        </ContentTitle>

        <ContentInfo>
          <ContentInfoType>
            <YearInfo>Categoria</YearInfo>
            <Year>Som aumotomotivo</Year>
          </ContentInfoType>

          <Animated.View entering={FlipInYRight.delay(550)}>
            <ContentContact>
              <Ionicons name="logo-whatsapp" size={40} color="green" />
            </ContentContact>
          </Animated.View>

          <ContentInfoPrice>
            <PriceInfo>R$</PriceInfo>
            <Price>300,00</Price>
          </ContentInfoPrice>

        </ContentInfo>

        <ContentDescription>
          <BorderTextDescription>
            <TextDescription>
            A Saveiro conta com uma identidade visual própria e muita inovação tecnológica. A picape da Volkswagen traz robustez, versatilidade e incorpora os sistemas de infotainment Volkswagen App-Connect, os mais modernos e interativos do mercado. O modelo conta ainda com três opções de carroceria (simples, estendida e dupla) e recursos de segurança como ESC (controle eletrônico de estabilidade) e freios ABS off-road.
            A Saveiro conta com uma identidade visual própria e muita inovação tecnológica. A picape da Volkswagen traz robustez, versatilidade e incorpora os sistemas de infotainment Volkswagen App-Connect, os mais modernos e interativos do mercado. O modelo conta ainda com três opções de carroceria (simples, estendida e dupla) e recursos de segurança como ESC (controle eletrônico de estabilidade) e freios ABS off-road.
            </TextDescription>
          </BorderTextDescription>
        </ContentDescription>

      </ScrollView>
    </Container>
  );
}
