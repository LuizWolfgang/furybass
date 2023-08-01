import { ActivityIndicator } from 'react-native';

import {
  Container,
  CarrouselView,
  InfoProducts,
  Product,
  SubTitle,
  Details,
  TitleDetails
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { ImageSliderProducts } from '../ImageSliderProducts';

type CardProps = {
    data: any;
    paused: boolean;
    playFocus: boolean;
}

type authScreenProps = {
    [x: string]: any;
   }

export function CardProducts({ data , paused, playFocus}: CardProps){
  if(!data){
    return <ActivityIndicator/>
  }
  const navigation = useNavigation<authScreenProps>();
  return (
    <Container>
      <CarrouselView>
        <ImageSliderProducts
          imagesUrl={
            data.media
          }
          paused={paused}
          playFocus={playFocus}
        />
      </CarrouselView>
      <InfoProducts>
        <Product>
          {data.name}
        </Product>
        <SubTitle>
            R$: {data.price}
        </SubTitle>
      </InfoProducts>
      <Details onPress={() => navigation.navigate('productDetails', { data })}>
        <TitleDetails>
            ver mais
        </TitleDetails>
      </Details>
    </Container>
  );
}
