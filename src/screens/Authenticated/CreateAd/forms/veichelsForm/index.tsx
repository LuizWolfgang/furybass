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
    country: string;
    price: string
  }

export function VeichleForm(){

  const vehicleSchema = yup.object({
    title: yup.string().required('Informe o titulo'),
    description:  yup.string().required('Informe a descricao'),
    number:  yup.string().required('Informe o numero'),
    km: yup.string().required('Informe o titulo'),
    year:  yup.string().required('Informe a descricao'),
    city:  yup.string().required('Informe o numero'),
    country:  yup.string().required('Informe a descricao'),
    price:  yup.string().required('Informe o numero'),
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
        {errors.title && <Errors>{errors.title.message}</Errors>}

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
        {errors.description && <Errors>{errors.description.message}</Errors>}

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
        {errors.number && <Errors>{errors.number.message}</Errors>}

        <Controller
          control={control}
          name="km"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="km:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.km && <Errors>{errors.km.message}</Errors>}

        <Controller
          control={control}
          name="year"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="ano:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.year && <Errors>{errors.year.message}</Errors>}

        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="city:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.city && <Errors>{errors.city.message}</Errors>}

        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="counrty:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.country && <Errors>{errors.country.message}</Errors>}

        <Controller
          control={control}
          name="price"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="price:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.price && <Errors>{errors.price.message}</Errors>}

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
