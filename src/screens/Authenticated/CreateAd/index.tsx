import React, { useRef, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList, Dimensions, Platform, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import theme from '../../../styles/theme';
import {
  Container,
  ContentTitle,
  Header,
  TouchIcon,
  Title,
  ContentAddImage,
  CardAddImage,
  CardTextAddImage,
  TextAddImage,
  TextInfoImage,
  ImageIndexes,
  Form,
  Errors,
  Footer} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as ImagePicker from 'expo-image-picker';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { ResizeMode, Video } from 'expo-av';

import Animated, { FlipOutXDown, ZoomInRight } from 'react-native-reanimated';

import { Bullet } from '../../../components/Bullet';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../../components/Input';

import { Button } from '../../../components/Button';
import { useFocusScreen } from '../../../hooks/useFocusScreen';

const windowWidth = Dimensions.get("window").width;
const windowHeight =  Dimensions.get("window").width;
const DIMENSIONS = Dimensions.get("window").height < 700 ? 290 : windowHeight

type FormDataProps = {
    email: string;
    password: string;
  }

export function CreateAd(){
  const [images, setImages] = useState([]);
  const [imageIndex, setimageIndex] = useState(0);
  //   const [category, setCategory] = useState({
  //     key: 'category',
  //     name: 'Categoria'
  //   });

  const navigation = useNavigation();
  const {isPlaying} = useFocusScreen();
  const route = useRoute()
  const { item } = route.params ? route.params : '' as any;
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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages(images.concat(result.assets));
    }
  };

  function handleOpenSelectCategoryModal(){
    navigation.navigate("categories")
  }

  return (
    <Container>
      <TouchableWithoutFeedback>
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
      </TouchableWithoutFeedback>
      <ScrollView
        contentContainerStyle={{ flexGrow: Platform.OS === 'ios' ? 0 : 1,  paddingBottom:Platform.OS === 'ios' ? 80 : 0}}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <ContentAddImage length={length}>
          {
            images.length === 0 ?

              <CardAddImage onPress={pickImage}>
                <AntDesign name="addfolder" size={22} color="white"/>
                <TextAddImage>Incluir arquivos</TextAddImage>
                <TextInfoImage>Escolha até 6 fotos e 1 video para mostrar o seu produto!</TextInfoImage>
              </CardAddImage>

              :

              <FlatList
                data={images}
                onViewableItemsChanged={indexChanged.current}
                viewabilityConfig={{
                  itemVisiblePercentThreshold: 20,
                }}
                keyExtractor={item => item.assetId}
                horizontal
                contentContainerStyle={{ paddingLeft: Platform.OS === 'ios' ? 0 : 5}}
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
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Titulo do anuncio"
                placeholderTextColor={theme.colors.placeholder}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Errors>{errors.email.message}</Errors>}

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Seu numero para contato (Whatsapp)"
                placeholderTextColor={theme.colors.placeholder}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && <Errors>{errors.email.message}</Errors>}

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Descriçao do produto"
                placeholderTextColor={theme.colors.placeholder}
                value={value}
                onChangeText={onChange}
                height
              />
            )}
          />
          {errors.password && <Errors>{errors.password.message}</Errors>}


          <Button
            onPress={handleOpenSelectCategoryModal}
            title={item?.name ? item?.name :  'Selecione a categoria'}
            color="black"
          />

        </Form>


        <Footer>
          <Button
            enabled
            color={theme.colors.success}
            loading={false}
            title="Publicar anuncio"
            onPress={handleOpenSelectCategoryModal}
          />
        </Footer>
      </ScrollView>
    </Container>
  );
}


