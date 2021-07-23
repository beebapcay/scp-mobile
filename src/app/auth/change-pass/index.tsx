import React, { FC, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { RouteComponentProps } from 'react-router-native';
import styles from '../../../common/ui/layout/auth-layout/resetLayoutStyle';
import CompleteComponent from '../../../common/ui/layout/auth-layout/completeComponent';
import ResetLayout from '../../../common/ui/layout/auth-layout/resetLayout';
import PasswordTextInput from '../../../common/ui/base/textInput/passwordTextInput';
import LargeBtn from '../../../common/ui/base/button/LargeBtn';
import { SmallText } from '../../../common/ui/base/touchableText';

interface Props extends RouteComponentProps<any> {}
const ChangePassword: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [oldSecure, setOldSecure] = useState<boolean>(true);
  const [newSecure, setNewSecure] = useState<boolean>(true);
  const [confirmSecure, setConfirmSecure] = useState<boolean>(true);
  const [resetComplete, setResetComplete] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });
  const oldPassword = useRef();
  const newPassword = useRef();
  oldPassword.current = watch('oldPassword', '');
  newPassword.current = watch('newPassword', '');

  const handleSendPress = (): void => {
    if (oldPassword.current !== '12345678') {
      Alert.alert(`${t('title.error')}`, `${t('title.oldPasswordError')}`, [
        {
          text: `${t('title.ok')}`,
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    } else {
      setResetComplete(true);
      oldPassword.current = undefined;
      newPassword.current = undefined;
      reset({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };

  const handleOldVisibleChange = (): void => {
    setOldSecure(!oldSecure);
  };

  const handleNewVisibleChange = (): void => {
    setNewSecure(!newSecure);
  };

  const handleConfirmVisible = (): void => {
    setConfirmSecure(!confirmSecure);
  };

  const handleBackPress = (): void => {
    setResetComplete(false);
    setOldSecure(true);
    setNewSecure(true);
    setConfirmSecure(true);
    props.history.goBack();
  };

  return (
    <ResetLayout titleKey="title.changePassword">
      {resetComplete ? (
        <CompleteComponent
          completeText={t('title.changePasswordCompleted')}
          backText={t('title.backToProfile')}
          onBackPress={handleBackPress}
        />
      ) : (
        <>
          <MaterialCommunityIcons
            name="lock-reset"
            size={100}
            color="#00C2FF"
            style={styles.image}
          />
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
                  placeholder={t('title.oldPassword')}
                  icon="key"
                  onTextChange={onChange}
                  onVisibleChange={handleOldVisibleChange}
                  secure={oldSecure}
                />
              )}
              name="oldPassword"
              defaultValue=""
            />
            {errors.oldPassword && (
              <Text style={styles.errorText}>{t('title.passwordError')}</Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                maxLength: 30,
                validate: (value) => value !== oldPassword.current,
              }}
              render={({ field: { onChange } }) => (
                <PasswordTextInput
                  placeholder={t('title.newPassword')}
                  icon="key"
                  onTextChange={onChange}
                  onVisibleChange={handleNewVisibleChange}
                  secure={newSecure}
                />
              )}
              name="newPassword"
              defaultValue=""
            />
            {errors.newPassword && (
              <Text style={styles.errorText}>
                {t('title.noMatchOldPassword')}
              </Text>
            )}

            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                maxLength: 30,
                validate: (value) => value === newPassword.current,
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
              title={t('title.confirmChangePassword')}
            />
            <SmallText
              onTextPress={handleBackPress}
              title={t('title.backToProfile')}
            />
          </View>
        </>
      )}
    </ResetLayout>
  );
};

export default ChangePassword;
