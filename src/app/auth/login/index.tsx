import React, { FC, useState } from 'react';
import { TouchableHighlight, Text, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { RouteComponentProps } from 'react-router-native';
import styles from '../../../common/ui/layout/auth-layout/authLayoutStyle';
import tempTenant from './tempTenant.json';
import { ScreenURL } from '../../../models/enum';
import AuthLayout from '../../../common/ui/layout/auth-layout/authLayout';
import NormalTextInput from '../../../common/ui/base/textInput/normalTextInput';
import PasswordTextInput from '../../../common/ui/base/textInput/passwordTextInput';
import ButtonContainer from './containers/btnContainer';

interface Props extends RouteComponentProps<any> {}
interface LoginInfoObject {
  username: string;
  password: string;
  tenant: string;
}

const Login: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [secure, setSecure] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const handleLoginPress = (loginInfo: LoginInfoObject): void => {
    if (
      loginInfo.username !== 'test' ||
      loginInfo.password !== '12345678' ||
      loginInfo.tenant === ''
    ) {
      Alert.alert(`${t('title.error')}`, `${t('title.loginError')}`, [
        {
          text: `${t('title.ok')}`,
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    } else {
      reset({
        username: '',
        password: '',
        tenant: '',
      });
      props.history.push(ScreenURL.MAIN);
    }
  };

  const handleRegisterPress = (): void => {
    props.history.push(ScreenURL.REGISTER);
  };

  const handleForgotPress = (): void => {
    props.history.push(ScreenURL.FORGOT_PASSWORD);
  };

  const handleVisiblePress = (): void => {
    setSecure(!secure);
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <TouchableHighlight style={styles.pickerContainer}>
            <RNPickerSelect
              style={styles}
              onValueChange={onChange}
              placeholder={{
                label: t('title.tenantPlaceholder'),
                value: '',
              }}
              items={tempTenant.tenants}
            />
          </TouchableHighlight>
        )}
        name="tenant"
        defaultValue=""
      />
      {errors.tenant && (
        <Text style={styles.errorText}>{t('title.tenantError')}</Text>
      )}
      {/* <TouchableHighlight style={styles.pickerContainer}>
        <RNPickerSelect
          style={styles}
          onValueChange={(value) => setTenant(value)}
          items={tempTenant.tenants}
        />
      </TouchableHighlight> */}

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <NormalTextInput
            placeholder={t('title.username')}
            icon="person"
            onTextChange={onChange}
            secure={false}
          />
        )}
        name="username"
        defaultValue=""
      />
      {errors.username && (
        <Text style={styles.errorText}>{t('title.usernameError')}</Text>
      )}

      <Controller
        control={control}
        rules={{ required: true, minLength: 8, maxLength: 30 }}
        render={({ field: { onChange } }) => (
          <PasswordTextInput
            placeholder={t('title.password')}
            icon="key"
            onTextChange={onChange}
            onVisibleChange={() => handleVisiblePress()}
            secure={secure}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && (
        <Text style={styles.errorText}>{t('title.passwordError')}</Text>
      )}

      <ButtonContainer
        onLoginPress={handleSubmit(handleLoginPress)}
        onRegisterPress={handleRegisterPress}
        onForgotPress={handleForgotPress}
      />
    </AuthLayout>
  );
};

export default Login;
