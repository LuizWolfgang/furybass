import React, { useEffect, useState } from 'react';
import { Image } from 'react-native'
import theme from '../../../styles/theme';
// import { useNavigation } from '@react-navigation/native';

import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';

// import * as Yup from 'yup'
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import BackgroundImg from '../../../assets/background.png'
// import { database } from '../../database'

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
  Errors
} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
// import { useAuth } from '../../hooks/auth';


type FormDataProps = {
    name: string;
  }

  type authScreenProps = {
    [x: string]: any;
   }

export function SignUp(){
  const navigation = useNavigation<authScreenProps>();
  const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });


  async function onSubmit(data: FormDataProps) {
    console.log(data)
  }
  // const navigation = useNavigation()
  // const { signIn } = useAuth();

  function handleNavigate(){
    navigation.navigate('DashboardCars')
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: Platform.OS === 'ios' ? 0 : 1}}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Image
            source={BackgroundImg}
            defaultSource={BackgroundImg}
            alt="Image Background"
            resizeMode="contain"
            position="absolute"
          />

          <Header>
            <Title>
                    BOAS VINDAS 🔥
            </Title>
            <SubTitle>
                    complete o seu cadastro e faça parte do maior app automotivo
            </SubTitle>
          </Header>

          <Form>
            {/* <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}//nao ficar corrigindo
              autoCapitalize="none" //retira a primeira letra maiuscula
              onChangeText={setEmail}
              value={email}
              error={errors.name.message}
            /> */}

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Nome"
                  placeholderTextColor={theme .colors.placeholder}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && <Errors>This is required.</Errors>}

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email"
                  placeholderTextColor={theme .colors.placeholder}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && <Errors>This is required.</Errors>}


            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  placeholder="Senha"
                  placeholderTextColor={theme .colors.placeholder}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && <Errors>This is required.</Errors>}

            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  placeholder="Confirme a senha"
                  placeholderTextColor={theme .colors.placeholder}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && <Errors>This is required.</Errors>}
          </Form>

          <Footer>
            <Button
              onPress={handleNavigate}
              title="Cadastar e acessar"
              enabled
              loading={false}
            />

          </Footer>
        </Container>

      </TouchableWithoutFeedback>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}
