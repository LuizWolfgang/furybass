import React, { useEffect, useState } from 'react';
import { Image } from 'react-native'
import theme from '../../../styles/theme';

import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import BackgroundImg from '../../../assets/background.png'

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

type FormDataProps = {
    email: string;
    password: string;
  }

 type authScreenProps = {
  [x: string]: any;
 }

export function SignIn(){
  const navigation = useNavigation<authScreenProps>();

  const signUpSchema = yup.object({
    email: yup.string().required('Informe o email'),
    password:  yup.string().required('Informe a senha'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  async function onSubmit(data: FormDataProps) {
    console.log(data)


  }
  // const navigation = useNavigation()
  // const { signIn } = useAuth();

  //   function handleNewAccount(){
  //     navigation.navigate('SignUp')
  //   }

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
            alt="Pessoas treinando"
            resizeMode="contain"
            position="absolute"
          />

          <Header>
            <Title>
                    Furybass
            </Title>
            <SubTitle>
                    O seu app automotivo
            </SubTitle>
          </Header>

          <Form>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email"
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
                  placeholder="Senha"
                  placeholderTextColor={theme.colors.placeholder}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password && <Errors>{errors.password.message}</Errors>}
          </Form>

          <Footer>
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Login"
              enabled
              loading={false}
            />

            <Button
              onPress={() => navigation.navigate('signUp', {
                value: ''
              })}
              light
              color={theme.colors.input}
              title="Criar conta gratuita"
              loading={false}
            />

          </Footer>
        </Container>

      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
