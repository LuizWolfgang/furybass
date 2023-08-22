import React, { useEffect, useRef, useState } from 'react';

import {
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  ContentTitle,
  Header,
  TouchIconCloseMedia,
  TouchIcon,
  Title,
  ContentAddImage,
  CardTextAddImage,
  TextAddImage,
  ImageIndexes,
  Form,
} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as ImagePicker from 'expo-image-picker';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useFocusScreen } from '../../../../hooks/useFocusScreen';
import {  useForm } from 'react-hook-form';
import { ResizeMode, Video } from 'expo-av';

import Animated, { FlipOutXDown, ZoomInRight } from 'react-native-reanimated';

import { Bullet } from '../../../../components/Bullet';
import { Button } from '../../../../components/Button';

import { VeichleForm } from '../../CreateAd/forms/veichelsForm';
import { ProductsForm } from '../../CreateAd/forms/productsForm';
import { ServicesForm } from '../../CreateAd/forms/servicesForm';

type FormDataProps = {
    email: string;
    password: string;
  }

export function EditAd(){
  const route = useRoute()
  const { data } = route.params ? route.params : '' as any;

  const [images, setImages] = useState([]);
  const [imageIndex, setimageIndex] = useState(0);

  const flatListRef = useRef(null);

  const navigation = useNavigation();
  const {isPlaying} = useFocusScreen();

  const video = useRef(null)
  const length = images.length

  const createdAt = yup.object({
    email: yup.string().required('Informe o email'),
    password:  yup.string().required('Informe a senha'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(createdAt)
  });

  async function onSubmit(data: FormDataProps) {
    console.log(data)
  }

  const indexChanged = useRef((info) => {
    const index = info.viewableItems[0].index
    setimageIndex(index)
  })


  const handleOpenSelectCategoryModal = async () => {
    navigation.navigate("categories")
  }

  const handleDeleteImage = async (index) => {
    const updatedItems = [...images];
    updatedItems.splice(index, 1);
    setImages(updatedItems);
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(images.concat(result.assets));
      console.log('result.assets', result.assets)
      flatListRef.current.scrollToEnd({animated: true });
    }
  };

  //Renderiza os formularios
  const RenderForm = ({ value, formDataEditAd}) => {
    console.log('formDataEditAd', formDataEditAd)
    switch (value) {
    case 'Veiculos':
      return (
        <>
          <VeichleForm dataForm={formDataEditAd}/>
        </>
      );
    case 'Produtos':
      return (
        <>
          <ProductsForm dataForm={formDataEditAd}/>
        </>
      );
    case 'Serviços':
      return (
        <>
          <ServicesForm dataForm={formDataEditAd}/>
        </>
      );
    default:
      return (
        <></>
      );
    }
  };

  useEffect(() => {
    const formattedArray = data.media.map((item) => {
      if (item.type === "image") {
        return {
          assetId: item.id,
          type: item.type,
          uri: item.url,
        };
      } else if (item.type === "video") {
        return {
          assetId: item.id,
          type: item.type,
          uri: item.url
        };
      }
    }).filter(Boolean)
    setImages(formattedArray);
  }, []);


  return (
    <Container>
      <TouchableWithoutFeedback>
        <Header>
          <TouchIcon onPress={() => navigation.goBack()} >
            <Entypo name="chevron-with-circle-left" size={24} color="white" />
          </TouchIcon>
          <ContentTitle>
            <TouchableOpacity>
              <Title>Meu anuncio</Title>
            </TouchableOpacity>
          </ContentTitle>
        </Header>
      </TouchableWithoutFeedback>
      <ScrollView
        contentContainerStyle={{ flexGrow: Platform.OS === 'ios' ? 0 : 1,  paddingBottom:Platform.OS === 'ios' ? 80 : 0}}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <ContentAddImage length={length}>
          {
            images.length === 0 ?

              <ActivityIndicator/>

              :

              <FlatList
                data={images}
                ref={flatListRef}
                onViewableItemsChanged={indexChanged.current}
                viewabilityConfig={{
                  itemVisiblePercentThreshold: 20,
                }}
                keyExtractor={item => item.assetId}
                horizontal
                contentContainerStyle={{ paddingLeft: Platform.OS === 'ios' ? 0 : 5}}
                renderItem={({ item, index}) => (
                  <>

                    <TouchIconCloseMedia onPress={() => handleDeleteImage(index)}>
                      <AntDesign name="closecircleo" size={24} color="red" />
                    </TouchIconCloseMedia>
                    { item.type === "image" ?
                      <Image
                        style={{ height: 200, width: images.length === 0 ? 390 : 350, marginHorizontal: 1}}
                        resizeMode='cover'
                        source={{ uri: item.uri }}
                      />
                      :
                      <View style={{ height: 290, width: 340}}>
                        {
                          typeof item.uri === 'string' ?
                            <Video
                              key={item.uri}
                              style={{ height: 200, width: images.length === 0 ? 390 : 350}}
                              ref={video}
                              source={{ uri: item.uri }}
                              shouldPlay={isPlaying && index === imageIndex}
                              volume={1}
                              useNativeControls
                              resizeMode={ResizeMode.COVER}
                              isLooping
                            />

                            :

                            <Video
                              key={item.uri}
                              style={{ height: 200, width: images.length === 0 ? 390 : 350}}
                              ref={video}
                              source={item.uri}
                              shouldPlay={isPlaying && index === imageIndex}
                              volume={1}
                              useNativeControls
                              resizeMode={ResizeMode.COVER}
                              isLooping
                            />

                        }

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
          <ImageIndexes>
            {
              images.map((item , index) => (
                <Bullet
                  key={String(item.assetId)}
                  actived={index !== imageIndex}
                />
              ))
            }
          </ImageIndexes>
          <CardTextAddImage onPress={pickImage}>
            <AntDesign name="addfolder" size={22} color="white"/>
            <TextAddImage>Adicionar</TextAddImage>
          </CardTextAddImage>
        </Animated.View>
        }
        <Form>

          <Button
            onPress={handleOpenSelectCategoryModal}
            title={ data ? data.type :'Selecione a categoria'}
            color="black"
          />

          <RenderForm value={data ? data.type : undefined} formDataEditAd={data}/>

        </Form>

      </ScrollView>
    </Container>
  );
}


