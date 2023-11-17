
import { Errors, Footer, Form } from './styles';
import theme from '../../../../../styles/theme';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";

import { Input } from '../../../../../components/Input';
import { Button } from '../../../../../components/Button';


import { useNavigation } from '@react-navigation/native';

type FormDataProps = {
    km: string;
    year: string;
  }

  type dataFormProps = {
    dataForm?: FormDataProps
    atInfo?: {
        title: string;
        description: string;
        number: string;
    }
  }


export function VeichleForm({dataForm, atInfo} : dataFormProps){
  const navigation = useNavigation();

  const vehicleSchema = yup.object({
    km: yup.string().required('Informe os Km s:'),
    year:  yup.string().required('Informe o ano:'),
  }).required();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(vehicleSchema),
    defaultValues: {
      km: dataForm ? dataForm.km : '',
      year: dataForm ? dataForm.year : '',
    }
  });

  async function onSubmit(data: FormDataProps) {
    console.log('VeichleForm',atInfo, data)
    // navigation.navigate('teste')
  }

  return (
    <>
      <Form>

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
