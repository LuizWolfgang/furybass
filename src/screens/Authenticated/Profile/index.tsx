import React, { useState } from 'react';
import { Alert, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'; //no keyboard (qnd sobe o teclado pra digitar) retira o tab bar
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { Entypo } from '@expo/vector-icons';

import { PasswordInput } from '../../../components/PasswordInput';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import * as Yup from 'yup'

import {
  Container,
  Header,
  Content,
  Options,
  OptionTitle,
  Option,
  Section,
  TouchIcon,
  ContentTitle,
  Title,
  PhotoContainer,
  Photo,
  PhotoButton,
  ContentPhotoProfile
} from './styles';


export function Profile(){
  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [driverLicense, setDriverLicense] = useState();

  const theme = useTheme();
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack();
  }

  const handleOptionChange = ( optionSelected: 'dataEdit' | 'passwordEdit') => {
    setOption(optionSelected)
  }

  async function handleAvatarSelect() {
    console.log('')
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string()
          .required('CNH é obrigatória'),
        name: Yup.string()
          .required('Nome é obrigatório')
      });

      const data = { name, driverLicense };
      await schema.validate(data);

      //   await updatedUser({
      //     id: user.id,
      //     user_id: user.user_id,
      //     email: user.email,
      //     name,
      //     driver_license: driverLicense,
      //     avatar,
      //     token: user.token
      //   });

      Alert.alert('Perfil atualizado!');

    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Opa', error.message);
      }else{
        Alert.alert('Não foi possível atualizar o perfil');
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async function handleSignOut(){
  }

  return (
    <Container>
      <TouchableWithoutFeedback>
        <Header>
          <TouchIcon onPress={() => navigation.goBack()} >
            <Entypo name="chevron-with-circle-left" size={24} color="white" />
          </TouchIcon>
          <ContentTitle>
            <Title>Perfil</Title>
          </ContentTitle>
        </Header>
      </TouchableWithoutFeedback>
      <ScrollView
        contentContainerStyle={{ flexGrow: Platform.OS === 'ios' ? 0 : 1,  paddingBottom:Platform.OS === 'ios' ? 80 : 0}}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        <ContentPhotoProfile>
          <PhotoContainer>
            { !!avatar && <Photo source={{ uri: avatar}}/> }
            <PhotoButton onPress={handleAvatarSelect}>
              <Entypo
                name="camera"
                size={24}
                color={theme.colors.shape}
              />
            </PhotoButton>
          </PhotoContainer>
        </ContentPhotoProfile>

        <Content>
          <Options>
            <Option
              active={option === 'dataEdit'}
              onPress={() => handleOptionChange('dataEdit')}
            >
              <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
            </Option>
            <Option
              active={option === 'passwordEdit'}
              onPress={() => handleOptionChange('passwordEdit')}
            >
              <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
            </Option>
          </Options>
          {
            option && option === 'dataEdit' ?
              <Section>
                <Input
                  iconName="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  defaultValue=""
                  onChangeText={setName}
                />
                <Input
                  iconName="mail"
                  editable={false}
                  defaultValue=""
                />
                <Input
                  iconName="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                  defaultValue="aaa"
                  onChangeText={setDriverLicense}
                />
              </Section>
              :
              <Section>
                <PasswordInput
                  iconName="lock"
                  placeholder="Senha Atual"
                />
                <PasswordInput
                  iconName="lock"
                  placeholder="Nova Atual"
                />
                <PasswordInput
                  iconName="lock"
                  placeholder="Repetir Senha"
                />
              </Section>
          }
          <Button
            title="Salvar alterações"
            onPress={handleProfileUpdate}
            enabled
            color={theme.colors.success}
          />
        </Content>
      </ScrollView>
    </Container>
  );

}
