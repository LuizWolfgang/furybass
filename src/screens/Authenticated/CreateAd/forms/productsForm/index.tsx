import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '../../../../../components/Input';
import { Errors, Footer, Form } from './styles';
import theme from '../../../../../styles/theme';
import { View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Button } from '../../../../../components/Button';
import { ModalSelectCategory } from '../../../../../components/ModalSelectCategory';
import { useCountrySelected } from '../../../../../hooks/useCountrySelected';

type FormDataProps = {
    title: string;
    description: string;
    number: string;
    city: string;
    brand: string;
    year: string;
    country: string;
    price: string
  }

export function ProductsForm(){
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [country, setCountry] = useState('')
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  },[])

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const handleSelectCountry = (country: string) => {
    setCountry(country)
  }

  const productSchema = yup.object({
    title: yup.string().required('Informe o titulo'),
    description:  yup.string().required('Informe a descrico'),
    number:  yup.string().required('Informe o numero'),
    brand:  yup.string().required('Informe a marca'),
    year:  yup.string().required('Informe o ano'),
    city:  yup.string().required('Informe a cidade'),
    country:  yup.string().required('Informe a estado'),
    price:  yup.string().required('Informe o numero'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(productSchema)
  });

  async function onSubmit(data: FormDataProps) {
    console.log('aaaaaaaaaaa', data)
  }

  return (
    <>
      <Form>
        {errors.title && <Errors>{errors.title.message}</Errors>}
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Titulo do anuncio:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors.description && <Errors>{errors.description.message}</Errors>}
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Descrição do produto:"
              placeholderTextColor={theme.colors.placeholder}
              value={value}
              onChangeText={onChange}
              height
            />
          )}
        />

        {errors.number && <Errors>{errors.number.message}</Errors>}
        <Controller
          control={control}
          name="number"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Telefone:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors.city && <Errors>{errors.city.message}</Errors>}
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="cidade:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors.city && <Errors>{errors.city.message}</Errors>}
        <Controller
          control={control}
          name="brand"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="marca:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors.country && <Errors>{errors.country.message}</Errors>}
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="cidade:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors.price && <Errors>{errors.price.message}</Errors>}
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="preço:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <View>
          <Button
            onPress={handlePresentModalPress}
            title={ country ? country : 'Selecione o'}
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View>
              <ModalSelectCategory
                handleSelectCountry={handleSelectCountry}
                onDismiss={handleDismissModalPress}
              />
            </View>
          </BottomSheetModal>
        </View>


        <Footer>
          <Button
            enabled
            color={theme.colors.success}
            loading={false}
            title="Publicar anuncio"
            onPress={handleSubmit(onSubmit)}
          />
        </Footer>
      </Form>
    </>
  );
}
