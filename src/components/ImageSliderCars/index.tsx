import React, {useRef, useState} from 'react';
import { View, Dimensions, FlatList, ViewToken, ActivityIndicator} from 'react-native';
import { Bullet } from '../Bullet';

import { Video, ResizeMode } from 'expo-av';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
  styles,
} from './styles';

interface Props {
 playFocus: boolean;
 paused: boolean;
 imagesUrl: {
   id: string;
   name: string;
   media: string;
   type: string;
   url: string;
 }[];
}

interface ChangeImageProps{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

const windowWidth = Dimensions.get("window").width;
const windowHeight =  Dimensions.get("window").width;
const DIMENSIONS = Dimensions.get("window").height < 0 ? 0 : windowHeight

export function  ImageSliderCars({imagesUrl, paused, playFocus}: Props){
  const [imageIndex, setimageIndex] = useState(0);
  const video = useRef(null)

  const indexChanged = useRef((info:ChangeImageProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = info.viewableItems[0].index!
    setimageIndex(index)
  })

  return (
    <Container>
      <FlatList
        data={imagesUrl}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 40,
        }}
        keyExtractor={item => item.id}
        renderItem={({ item, index}) => (
          <CarImageWrapper>
            { item.type === "image" ?
              <CarImage
                source={{ uri: item.url }}
              />
              :
              <View style={{ width: windowWidth, height: DIMENSIONS, position: "relative" }}>
                <Video
                  ref={video}
                  style={styles.video}
                  source={item.url}
                  shouldPlay={playFocus && imageIndex === index && !paused}
                  volume={1}
                  useNativeControls
                  resizeMode={ResizeMode.COVER}
                  isLooping
                />
              </View>
            }
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />

      <ImageIndexes>
        {
          imagesUrl ?
            imagesUrl.map((item , index) => (
              <Bullet
                key={String(item.id)}
                actived={index !== imageIndex}
              />
            )) :
            <ActivityIndicator/>
        }
      </ImageIndexes>
    </Container>
  );
}
