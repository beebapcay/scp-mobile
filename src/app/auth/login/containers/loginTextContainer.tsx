import React from "react";
import { useTranslation } from "react-i18next";
import NormalTextInput from "../../../../common/ui/base/textInput/normalTextInput";
import PasswordTextInput from "../../../../common/ui/base/textInput/passwordTextInput";

interface Props {
  onUsernameChange: Function;
  onPasswordChange: Function;
  onVisibleChange: Function;
  visible: boolean;
}
const LoginTextContainer = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <NormalTextInput
        placeholder={t("title.username")}
        icon="person"
        onTextChange={props.onUsernameChange}
        secure={false}
      />
      <PasswordTextInput
        placeholder={t("title.password")}
        icon="key"
        onTextChange={props.onPasswordChange}
        onVisibleChange={props.onVisibleChange}
        secure={props.visible}
      />
    </>
  );
};

export default LoginTextContainer;
