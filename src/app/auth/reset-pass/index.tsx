import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { resetPasswordCheck } from "../../../common/util/common";
import { ScreenURL } from "../../../models/enum";
import styles from "../../../common/ui/layout/card-view-layout/style";
import DoublePasswordContainer from "./containers/doublePasswordContainer";
import ResetComplete from "../../../common/ui/layout/card-view-layout/resetComplete";
import { RouteComponentProps } from "react-router-native";
import CardViewLayout from "../../../common/ui/layout/card-view-layout";

interface Props extends RouteComponentProps<any> {}
const ResetPassword = (props: Props) => {
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [confirmVisible, setConfirmVisible] = useState<boolean>(true);
  const [resetComplete, setResetComplete] = useState<boolean>(false);

  const handleSendPress = (): void => {
    if (resetPasswordCheck(newPassword, newConfirmPassword)) {
      setResetComplete(true);
    }
  };

  const handlePasswordChange = (data: string): void => {
    setNewPassword(data);
  };

  const handleConfirmPasswordChange = (data: string): void => {
    setNewConfirmPassword(data);
  };

  const handleVisibleChange = (): void => {
    setVisible(!visible);
  };

  const handleConfirmVisible = (): void => {
    setConfirmVisible(!confirmVisible);
  };

  const handleBackPress = (): void => {
    setResetComplete(false);
    setNewPassword("");
    setNewConfirmPassword("");
    props.history.push(ScreenURL.LOGIN);
  };

  const completeChange = (): JSX.Element => {
    if (resetComplete === false) {
      return (
        <>
          <View style={styles.passwordContainer}>
            <DoublePasswordContainer
              onPasswordChange={handlePasswordChange}
              onConfirmPasswordChange={handleConfirmPasswordChange}
              onVisibleChange={handleVisibleChange}
              onConfirmVisibleChange={handleConfirmVisible}
              visible={visible}
              confirmVisible={confirmVisible}
              sendPress={handleSendPress}
              title={t("title.send")}
            />
          </View>
        </>
      );
    } else {
      return (
        <ResetComplete
          completeText={t("title.resetCompleted")}
          backText={t("title.backToLogin")}
          onBackPress={handleBackPress}
        />
      );
    }
  };

  return <CardViewLayout>{completeChange()}</CardViewLayout>;
};

export default ResetPassword;
