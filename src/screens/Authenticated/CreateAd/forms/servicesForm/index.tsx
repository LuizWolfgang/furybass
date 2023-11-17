import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '../../../../../components/Input';
import { Errors, Footer, Form, ViewModal } from './styles';
import { Button } from '../../../../../components/Button';
import theme from '../../../../../styles/theme';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ModalSelect } from '../../../../../components/ModalSelect';

type FormDataProps = {
    city: string;
    country?:string;
    price: string
  }

  type dataFormProps = {
    dataForm?: FormDataProps,
    atInfo?: {
        title: string;
        description: string;
        number: string;
    }
  }

export function ServicesForm({dataForm}: dataFormProps ){

  const vehicleSchema = yup.object({
    city:  yup.string().required('Informe a cidade:'),
    price:  yup.string().required('Informe o preço:'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(vehicleSchema),
    defaultValues: {
      city: dataForm ? dataForm.city : '',
      price: dataForm ? dataForm.price : '',
    }
  });

  async function onSubmit(data: FormDataProps) {
    console.log('aaaaaaaaaaa', data)
  }

  return (
    <>
      <Form>
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
