import React from "react";
import { useTranslation } from "react-i18next";
import PasswordTextInput from "../../../../common/ui/base/textInput/passwordTextInput";
import SmallText from "../../../../common/ui/base/touchableText/smallText";
import DoublePasswordContainer from "../../reset-pass/containers/doublePasswordContainer";

interface Props {
  onOldPasswordChange: Function;
  onNewPasswordChange: Function;
  onConfirmPasswordChange: Function;
  onOldVisibleChange: Function;
  onNewVisibleChange: Function;
  onConfirmVisibleChange: Function;
  oldVisible: boolean;
  newVisible: boolean;
  confirmVisible: boolean;
  sendPress: Function;
  title: string;
  backPress: Function;
  backTitle: string;
}

const ChangePasswordContainer = (props: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <PasswordTextInput
        placeholder={t("title.oldPassword")}
        icon="lock"
        onTextChange={props.onOldPasswordChange}
        onVisibleChange={props.onOldVisibleChange}
        secure={props.oldVisible}
      />
      <DoublePasswordContainer
        onPasswordChange={props.onNewPasswordChange}
        onConfirmPasswordChange={props.onConfirmPasswordChange}
        onVisibleChange={props.onNewVisibleChange}
        onConfirmVisibleChange={props.onConfirmVisibleChange}
        visible={props.newVisible}
        confirmVisible={props.confirmVisible}
        sendPress={props.sendPress}
        title={props.title}
      />
      <SmallText onTextPress={props.backPress} title={props.backTitle} />
    </>
  );
};

export default ChangePasswordContainer;
