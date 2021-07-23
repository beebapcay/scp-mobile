import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { Entypo } from 'react-native-vector-icons';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-native';
import { Controller, useForm } from 'react-hook-form';
import styles from '../../../common/ui/layout/auth-layout/resetLayoutStyle';
import EmailTextInput from '../../../common/ui/base/textInput/emailTextInput';
import { email_reg } from '../../../common/util/constants';
import ButtonContainer from './btnContainer';
import CompleteComponent from '../../../common/ui/layout/auth-layout/completeComponent';
import ResetLayout from '../../../common/ui/layout/auth-layout/resetLayout';

interface Props extends RouteComponentProps<any> {}
interface SubmitObject {
  email: string;
}
const ForgotPassword: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [complete, setComplete] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ reValidateMode: 'onSubmit' });

  const handleSendPress = (emailSubmit: SubmitObject): void => {
    setComplete(true);
    reset({
      email: '',
    });
  };

  const handleBackPress = (): void => {
    setComplete(false);
    props.history.goBack();
  };

  return (
    <ResetLayout titleKey="title.forgotPassword">
      {complete ? (
        <CompleteComponent
          completeText={t('title.sentReset')}
          backText={t('title.backToLogin')}
          onBackPress={handleBackPress}
        />
      ) : (
        <>
          <Entypo name="mail" size={100} color="#00C2FF" style={styles.image} />
          <Text style={styles.des}>{t('forgot.description1')}</Text>
          <Text style={styles.des}>{t('forgot.description2')}</Text>
          <Text style={styles.des}>{t('forgot.description3')}</Text>
          <Controller
            control={control}
            rules={{ required: true, pattern: email_reg }}
            render={({ field: { onChange } }) => (
              <EmailTextInput
                placeholder={t('title.email')}
                icon="email"
                onTextChange={onChange}
                secure={false}
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && (
            <Text style={styles.errorText}>{t('title.emailError')}</Text>
          )}
          <ButtonContainer
            onSendPress={handleSubmit(handleSendPress)}
            onBackPress={handleBackPress}
            title={t('title.send')}
            backTitle={t('title.backToLogin')}
          />
        </>
      )}
    </ResetLayout>
  );
};

export default ForgotPassword;
