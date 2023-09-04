import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Errors, Footer, Form, ViewModal } from './styles';
import theme from '../../../../../styles/theme';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

import { Input } from '../../../../../components/Input';
import { ModalSelect } from '../../../../../components/ModalSelect';
import { Button } from '../../../../../components/Button';


import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';

type FormDataProps = {
    title: string;
    description: string;
    number: string;
    km: string;
    year: string;
    city: string;
    country?: string;
    price: string;
  }

  type dataFormProps = {
    dataForm?: FormDataProps
  }


export function VeichleForm({dataForm} : dataFormProps){
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [country, setCountry] = useState('')

  //  MODAL
  const snapPoints = useMemo(() => ['25%', '80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const handleSelectValueModal = (value) => {
    console.log(value);
    setCountry(value);
    bottomSheetModalRef.current?.close()
  }
  // END MODAL

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
    resolver: yupResolver(vehicleSchema),
    defaultValues: {
      title: dataForm ? dataForm.title : '',
      description: dataForm ? dataForm.description : '',
      number: dataForm ? dataForm.number : '',
      km: dataForm ? dataForm.km : '',
      year: dataForm ? dataForm.year : '',
      city: dataForm ? dataForm.city : '',
      price: dataForm ? dataForm.price : '',
    }
  });

  async function onSubmit(data: FormDataProps) {
    console.log('VeichleForm', data, country)
    // navigation.navigate('teste')
  }

  useEffect(() => {
    if(dataForm?.country){
      setCountry(dataForm.country)
    }
  },[])

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
              defaultValue={value}
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
              defaultValue={value}
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
              defaultValue={value}
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
              defaultValue={value}
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
              defaultValue={value}
              keyboardType="numeric"
              maxLength={4}
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
              defaultValue={value}
              maxLength={10}
            />
          )}
        />

        <ViewModal>
          <Button
            onPress={handlePresentModalPress}
            title={ country ? country : 'Selecione o estado'}
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <>
              <ModalSelect
                handleSelectValue={handleSelectValueModal}
              />
            </>
          </BottomSheetModal>
        </ViewModal>


        {errors.city && <Errors>{errors.city.message}</Errors>}
        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Cidade:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              defaultValue={value}
              maxLength={30}
            />
          )}
        />

        <Footer>
          <Button
            enabled
            color={theme.colors.success}
            loading={false}
            title={dataForm ? "Salvar alterações" : "Publicar anúncio"}
            onPress={handleSubmit(onSubmit)}
          />

          {
            dataForm &&
            <Button
              enabled
              color={theme.colors.main}
              loading={false}
              title="Excluir anúncio"
              onPress={handleSubmit(onSubmit)}
            />
          }

        </Footer>
      </Form>
    </>
  );
}
