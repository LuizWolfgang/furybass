import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '../../../../../components/Input';
import { Errors, Footer, Form } from './styles';
import { Button } from '../../../../../components/Button';
import theme from '../../../../../styles/theme';

type FormDataProps = {
    title: string;
    description: string;
    number: string;
    km: string;
    year: string;
    brand?: string;
    city: string;
    price: string
  }

export function VeichleForm(){

  const vehicleSchema = yup.object({
    title: yup.string().required('Informe o título'),
    description:  yup.string().required('Informe a descrição'),
    number:  yup.string().required('Informe o número'),
    km: yup.string().required('Informe os Km s'),
    year:  yup.string().required('Informe o ano'),
    city:  yup.string().required('Informe a cidade'),
    price:  yup.string().required('Informe o preço'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(vehicleSchema)
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
              placeholder="Titulo do anúncio:"
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
              placeholder="Seu número de whatsapp:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
              keyboardType="phone-pad"
              maxLength={12}
            />
          )}
        />

        {errors.km && <Errors>{errors.km.message}</Errors>}
        <Controller
          control={control}
          name="km"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="km:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              maxLength={8}
            />
          )}
        />

        {errors.year && <Errors>{errors.year.message}</Errors>}
        <Controller
          control={control}
          name="year"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Ano:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
              maxLength={4}
            />

          )}
        />

        {errors.city && <Errors>{errors.city.message}</Errors>}
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Cidade:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
              maxLength={30}
            />
          )}
        />

        {errors.price && <Errors>{errors.price.message}</Errors>}
        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Preço:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
              maxLength={10}
            />
          )}
        />

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
