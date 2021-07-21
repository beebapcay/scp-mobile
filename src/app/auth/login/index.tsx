import React, { FC, useState } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
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
}

const Login: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [tenant, setTenant] = useState<string>(tempTenant.tenants[0].value);
  const [secure, setSecure] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const handleLoginPress = (loginInfo: LoginInfoObject): void => {
    reset({
      email: '',
      password: '',
    });
    // AsyncStorage.setItem(ScopeKey.IS_AUTHENTICATED,ScopeValue.TRUE)
    // const next = props.location.search.split("=")
    // if (next.length==2){
    //     console.log(next[1])
    //     props.history.push(`${next[1]}`)
    // }
    // else props.history.push(ScreenURL.HOME)
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
      <TouchableHighlight style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={tenant}
          mode="dropdown"
          onValueChange={(itemValue) => {
            setTenant(itemValue);
          }}
        >
          {tempTenant.tenants.map((item) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
        </Picker>
      </TouchableHighlight>

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
