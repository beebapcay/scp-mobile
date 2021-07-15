import React from "react";
import { useTranslation } from "react-i18next";
import LargeBtn from "../../../../common/ui/base/button/LargeBtn";
import PasswordTextInput from "../../../../common/ui/base/textInput/passwordTextInput";

interface Props {
  onPasswordChange: Function;
  onConfirmPasswordChange: Function;
  onVisibleChange: Function;
  onConfirmVisibleChange: Function;
  visible: boolean;
  confirmVisible: boolean;
  sendPress: Function;
  title: string;
}
const DoublePasswordContainer = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <PasswordTextInput
        placeholder={t("title.newPassword")}
        icon="key"
        onTextChange={props.onPasswordChange}
        onVisibleChange={props.onVisibleChange}
        secure={props.visible}
      />
      <PasswordTextInput
        placeholder={t("title.confirmNewPassword")}
        icon="key"
        onTextChange={props.onConfirmPasswordChange}
        onVisibleChange={props.onConfirmVisibleChange}
        secure={props.confirmVisible}
      />
      <LargeBtn onBtnPress={props.sendPress} title={props.title} />
    </>
  );
};

export default DoublePasswordContainer;
