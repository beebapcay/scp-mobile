import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import LargeBtn from '../../../../common/ui/base/button/LargeBtn';
import LargeText from '../../../../common/ui/base/touchableText/largeText';
import SmallText from '../../../../common/ui/base/touchableText/smallText';

interface Props {
  onLoginPress: () => void;
  onRegisterPress: () => void;
  onForgotPress: () => void;
}

const ButtonContainer: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <LargeBtn
        onBtnPress={() => props.onLoginPress()}
        title={t('title.login')}
      />

      <LargeText
        onTextPress={() => props.onRegisterPress()}
        title={t('title.register')}
      />
      <SmallText
        onTextPress={() => props.onForgotPress()}
        title={t('title.forgotPassword')}
      />
    </>
  );
};

export default ButtonContainer;
