import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  Container,
  CarrouselView,
  InfoCars,
  UserGreeting,
  SubTitle,
  Km,
  Details,
  TitleDetails
} from './styles';

import { ImageSlider } from '../ImageSlider';
import { useNavigation } from '@react-navigation/native';


type CardProps = {
    data: any;
    paused: boolean;
    playFocus: boolean;
}
type authScreenProps = {
    [x: string]: any;
   }

export function CardCars({ data , paused, playFocus}: CardProps){
  console.log('CardCars', data);
  if(!data){
    return <ActivityIndicator/>
  }
  const navigation = useNavigation<authScreenProps>();
  return (
    <Container>
      <CarrouselView>
        <ImageSlider
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
        <SubTitle>
            R$: {data.price}
        </SubTitle>
        <Km>
            km: {data.km}
        </Km>
      </InfoCars>
      <Details onPress={() => navigation.navigate('CarDetails', { data })}>
        <TitleDetails>
            ver mais
        </TitleDetails>
      </Details>
    </Container>
  );
}
