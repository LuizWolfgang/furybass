import React, { useEffect } from 'react';
import theme from '../../../../styles/theme';

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
  PriceInfo,
  Km,
  City
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



import { ImageSliderCars } from '../../../../components/ImageSliderCars';
import { ScrollView } from 'react-native-gesture-handler';

import Animated, { FlipInYRight } from 'react-native-reanimated';
import { useFocusScreen } from '../../../../hooks/useFocusScreen';


type Params = {
    any:any;
}

export function CarDetails(){
  const route = useRoute()
  const {isPlaying} = useFocusScreen();
  const { data } = route.params as Params;
  const navigation = useNavigation();
  console.log('play', isPlaying)
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
          <ImageSliderCars
            imagesUrl={
              data.media
            }
            paused={false}
            playFocus={isPlaying}
          />
        </CarrouselView>

        <ContentTitle>
          <Title>{data.name}</Title>
          <Km>km: {data.km}</Km>
          <City>{data.city}-{data.country}</City>
        </ContentTitle>

        <ContentInfoCar>

          <ContentInfoYear>
            <YearInfo>Ano</YearInfo>
            <Year>{data.year}</Year>
          </ContentInfoYear>

          <Animated.View entering={FlipInYRight.delay(550)}>
            <ContentContact>
              <Ionicons name="logo-whatsapp" size={40} color="green" />
            </ContentContact>
          </Animated.View>

          <ContentInfoPrice>
            <PriceInfo>R$</PriceInfo>
            <Price>{data.price}</Price>
          </ContentInfoPrice>

        </ContentInfoCar>

        <ContentAcessories>
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
