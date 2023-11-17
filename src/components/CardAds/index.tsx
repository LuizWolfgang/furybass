import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  CarrouselView,
  InfoCars,
  UserGreeting,
  Details,
  TitleDetails,
  Price
} from './styles';

import { ImageSliderCars } from '../ImageSliderCars';
import { useNavigation } from '@react-navigation/native';


type CardProps = {
    data: any;
    paused: boolean;
    playFocus: boolean;
}

export function CardAds({ data , paused, playFocus}: CardProps){
  if(!data){
    return <ActivityIndicator/>
  }

  const navigation = useNavigation();
  return (
    <Container>
      <CarrouselView>
        <ImageSliderCars
          imagesUrl={
            data.media
          }
          paused={paused}
          playFocus={playFocus}
        />
      </CarrouselView>
      <InfoCars>
        <UserGreeting>
          {data.title}
        </UserGreeting>
        <Price>
         R$: {data.price}
        </Price>

      </InfoCars>
      <Details onPress={() => navigation.navigate('editAd', { data, playFocus })}>
        <TitleDetails>
            ver anúncio
        </TitleDetails>
      </Details>
    </Container>
  );
}
