import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Input } from '../../../../../components/Input';
import { Errors, Footer, Form, ViewModal } from './styles';
import theme from '../../../../../styles/theme';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Button } from '../../../../../components/Button';
import { ModalSelect } from '../../../../../components/ModalSelect';

type FormDataProps = {
    brand: string;
  }

  type dataFormProps = {
    dataForm?: FormDataProps,
    atInfo?: {
        title: string;
        description: string;
        number: string;
    }
  }

export function ProductsForm({dataForm}: dataFormProps ){

  const productSchema = yup.object({
    brand:  yup.string().required('Informe a marca do produto:'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      brand: dataForm ? dataForm.brand : '',
    }
  });

  async function onSubmit(data: FormDataProps) {
    console.log('aaaaaaaaaaa', data)
  }

  return (
    <>
      <Form>
        {errors.brand && <Errors>{errors.brand.message}</Errors>}
        <Controller
          control={control}
          name="brand"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Marca do produto:"
              placeholderTextColor={theme.colors.placeholder}
              onChangeText={onChange}
              defaultValue={value}
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
