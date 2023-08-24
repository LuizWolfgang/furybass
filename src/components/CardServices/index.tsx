import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  CarrouselView,
  InfoCars,
  UserGreeting,
  SubTitle,
  Country,
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

export function CardServices({ data , paused, playFocus}: CardProps){
  if(!data){
    return <ActivityIndicator/>
  }

  console.log(data);
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
          {data.name}
        </UserGreeting>
        <Country>
          {data.city}-{data.country}
        </Country>
        <Price>
         R$: {data.price}
        </Price>

      </InfoCars>
      <Details onPress={() => navigation.navigate('serviceDetails', { data, playFocus })}>
        <TitleDetails>
            ver mais
        </TitleDetails>
      </Details>
    </Container>
  );
}
