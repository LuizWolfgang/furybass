import React, { useRef, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ContentTitle,
  Header,
  TouchIcon,
  Title,
  ContentInfoMedia,
  ContentAddImage,
  CardAddImage,
  CardTextAddImage,
  ContentIcons,
  TextAddImage,
  ContentTotal,
  TextTotal,
  ContentAddImages,
  TouchAddImage,
  TitleInfoMedia,
  TextInfoImage,
  ContentImageSlide,
  ContentTextAddImage,

} from './styles';

import * as ImagePicker from 'expo-image-picker';

import { Entypo } from '@expo/vector-icons';

import { AntDesign } from '@expo/vector-icons';

import { ResizeMode, Video } from 'expo-av';
import Animated, { FlipOutXDown, RollInLeft, RollInRight, SlideInLeft, ZoomInRight } from 'react-native-reanimated';
import { ZoomInLeft } from 'react-native-reanimated';
import { RotateOutDownLeft } from 'react-native-reanimated';

const windowWidth = Dimensions.get("window").width;
const windowHeight =  Dimensions.get("window").width;
const DIMENSIONS = Dimensions.get("window").height < 700 ? 290 : windowHeight

export function CreateAd(){
  const [isUpdating, setIsUpdating] = useState(false);
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const length = images.length
  const video = useRef(null)
  const navigation = useNavigation();

  console.log(video.current)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('AAAA', result.assets);

    if (!result.canceled) {
      setImages(images.concat(result.assets));
    }
  };

  //   console.log('lenght', images.map((image) => {
  //     return image.uri
  //   }))

  return (
    <Container>
      <Header>
        <TouchIcon onPress={() => navigation.goBack()} >
          <Entypo name="chevron-with-circle-left" size={24} color="white" />
        </TouchIcon>
        <ContentTitle>
          <TouchableOpacity onPress={pickImage}>
            <Title>Criar anúncio</Title>
          </TouchableOpacity>

        </ContentTitle>
      </Header>

      <ContentInfoMedia>
        <TitleInfoMedia>Imagens</TitleInfoMedia>
        <TextInfoImage>Escolha até 6 fotos e 1 video para mostrar o seu produto!</TextInfoImage>
      </ContentInfoMedia>

      <ContentAddImage length={length}>
        {
          images.length === 0 ?

            <CardAddImage onPress={pickImage}>
              <AntDesign name="addfolder" size={22} color="white"/>
              <TextAddImage>Incluir arquivos</TextAddImage>
            </CardAddImage>

            :

            <FlatList
              data={images}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={{ paddingRight: 20}}
              renderItem={({ item, index}) => (
                <>
                  { item.type === "image" ?
                    <Image
                      key={item.uri}
                      style={{ height: 200, width: images.length === 0 ? 390 : 350, marginHorizontal: 1}}
                      resizeMode='cover'
                      source={{  uri: item.uri }}
                    />
                    :
                    <View style={{ height: 290, width: 340}}>
                      <Video
                        style={{ height: 200, width: images.length === 0 ? 390 : 350}}
                        ref={video}
                        source={{ uri: item.uri }}
                        shouldPlay={false}
                        volume={1}
                        useNativeControls
                        resizeMode={ResizeMode.COVER}
                        isLooping
                      />
                    </View>
                  }
                </>
              )}
            />
        }
      </ContentAddImage>
      {
        images.length >= 1 && images.length <= 5 &&
        <Animated.View entering={ZoomInRight.delay(800)} exiting={FlipOutXDown.delay(700)}>
          <ContentTextAddImage>
            <CardTextAddImage onPress={pickImage}>
              <AntDesign name="addfolder" size={22} color="white"/>
              <TextAddImage>Incluir arquivos</TextAddImage>
            </CardTextAddImage>

            <ContentTotal>
              <TextTotal>Arquivo {images.length} de 6</TextTotal>
            </ContentTotal>
          </ContentTextAddImage>
        </Animated.View>
      }
    </Container>
  );
}
