import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { Controller, useForm } from 'react-hook-form';
import { ScreenURL } from '../../../models/enum';
import styles from '../../../common/ui/layout/auth-layout/resetLayoutStyle';
import CompleteComponent from '../../../common/ui/layout/auth-layout/completeComponent';
import ResetLayout from '../../../common/ui/layout/auth-layout/resetLayout';
import PasswordTextInput from '../../../common/ui/base/textInput/passwordTextInput';
import LargeBtn from '../../../common/ui/base/button/LargeBtn';

interface Props extends RouteComponentProps<any> {}
interface SubmitObject {
  password: string;
  confirmPasswrod: string;
}
const ResetPassword: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [secure, setSecure] = useState<boolean>(true);
  const [confirmSecure, setConfirmSecure] = useState<boolean>(true);
  const [resetComplete, setResetComplete] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = useRef();
  password.current = watch('password', '');

  const handleSendPress = (passwordSubmit: SubmitObject): void => {
    setResetComplete(true);
    password.current = undefined;
    reset({
      password: '',
      confirmPassword: '',
    });
  };

  const handleVisibleChange = (): void => {
    setSecure(!secure);
  };

  const handleConfirmVisible = (): void => {
    setConfirmSecure(!confirmSecure);
  };

  const handleBackPress = (): void => {
    setResetComplete(false);
    props.history.push(ScreenURL.HOME);
  };

  return (
    <ResetLayout titleKey="title.resetPassword">
      {resetComplete ? (
        <CompleteComponent
          completeText={t('title.resetCompleted')}
          backText={t('title.backToLogin')}
          onBackPress={handleBackPress}
        />
      ) : (
        <>
          <View style={styles.passwordContainer}>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                maxLength: 30,
              }}
              render={({ field: { onChange } }) => (
                <PasswordTextInput
                  placeholder={t('title.newPassword')}
                  icon="key"
                  onTextChange={onChange}
                  onVisibleChange={handleVisibleChange}
                  secure={secure}
                />
              )}
              name="password"
              defaultValue=""
            />
            {errors.password && (
              <Text style={styles.errorText}>{t('title.passwordError')}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                maxLength: 30,
                validate: (value) => value === password.current,
              }}
              render={({ field: { onChange } }) => (
                <PasswordTextInput
                  placeholder={t('title.confirmNewPassword')}
                  icon="key"
                  onTextChange={onChange}
                  onVisibleChange={handleConfirmVisible}
                  secure={confirmSecure}
                />
              )}
              name="confirmPassword"
              defaultValue=""
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>
                {t('title.passwordMatchError')}
              </Text>
            )}

            <LargeBtn
              onBtnPress={handleSubmit(handleSendPress)}
              title={t('title.send')}
            />
          </View>
        </>
      )}
    </ResetLayout>
  );
};

export default ResetPassword;
