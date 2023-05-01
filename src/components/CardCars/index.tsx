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
    focusedIndex: boolean;
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
             Saveiro Cross 2018
        </UserGreeting>
        <SubTitle>
            R$: 180.000.00
        </SubTitle>
        <Km>
            km: 280 mil
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
