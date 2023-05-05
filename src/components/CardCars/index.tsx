import React from 'react';
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
}
type authScreenProps = {
    [x: string]: any;
   }

export function CardCars({ data , paused}: CardProps){
  const navigation = useNavigation<authScreenProps>();
  return (
    <Container>
      <CarrouselView>
        <ImageSlider
          imagesUrl={
            data.media
          }
          paused={paused}
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
      <Details onPress={() => navigation.navigate('CarDetails')}>
        <TitleDetails>
            ver mais
        </TitleDetails>
      </Details>
    </Container>
  );
}
