import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import styles from "../../../common/ui/layout/card-view-layout/style";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ChangePasswordContainer from "./containers/changePasswordContainer";
import { ScreenURL } from "../../../models/enum";
import { changePasswordCheck } from "../../../common/util/common";
import ResetComplete from "../../../common/ui/layout/card-view-layout/resetComplete";
import { RouteComponentProps } from "react-router-native";
import CardViewLayout from "../../../common/ui/layout/card-view-layout";

interface Props extends RouteComponentProps<any> {}
const ChangePassword = (props: Props) => {
  const { t } = useTranslation();
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [newConfirmPassword, setNewConfirmPassword] = useState<string>("");
  const [oldVisible, setOldVisible] = useState<boolean>(true);
  const [newVisible, setNewVisible] = useState<boolean>(true);
  const [confirmVisible, setConfirmVisible] = useState<boolean>(true);
  const [resetComplete, setResetComplete] = useState<boolean>(false);

  const handleSendPress = (): void => {
    if (changePasswordCheck(oldPassword, newPassword, newConfirmPassword)) {
      setResetComplete(true);
    }
  };

  const handleOldPasswordChange = (data: string): void => {
    setOldPassword(data);
  };

  const handleNewPasswordChange = (data: string): void => {
    setNewPassword(data);
  };

  const handleConfirmPasswordChange = (data: string): void => {
    setNewConfirmPassword(data);
  };

  const handleOldVisibleChange = (): void => {
    setOldVisible(!oldVisible);
  };

  const handleNewVisibleChange = (): void => {
    setNewVisible(!newVisible);
  };

  const handleConfirmVisible = (): void => {
    setConfirmVisible(!confirmVisible);
  };

  const handleBackPress = (): void => {
    setResetComplete(false);
    setOldPassword("");
    setNewPassword("");
    setNewConfirmPassword("");
    setOldVisible(true);
    setNewVisible(true);
    setConfirmVisible(true);
    props.history.push(ScreenURL.HOME);
  };

  const completeChange = (): JSX.Element => {
    if (resetComplete === false) {
      return (
        <>
          <MaterialCommunityIcons
            name="lock-reset"
            size={100}
            color="#00C2FF"
            style={styles.image}
          />
          <View style={styles.passwordContainer}>
            <ChangePasswordContainer
              onOldPasswordChange={handleOldPasswordChange}
              onNewPasswordChange={handleNewPasswordChange}
              onConfirmPasswordChange={handleConfirmPasswordChange}
              onOldVisibleChange={handleOldVisibleChange}
              onNewVisibleChange={handleNewVisibleChange}
              onConfirmVisibleChange={handleConfirmVisible}
              oldVisible={oldVisible}
              newVisible={newVisible}
              confirmVisible={confirmVisible}
              sendPress={handleSendPress}
              title={t("title.confirmChangePassword")}
              backPress={handleBackPress}
              backTitle={t("title.backToHome")}
            />
          </View>
        </>
      );
    } else {
      return (
        <ResetComplete
          completeText={t("title.changePasswordCompleted")}
          backText={t("title.backToHome")}
          onBackPress={handleBackPress}
        />
      );
    }
  };

  return <CardViewLayout>{completeChange()}</CardViewLayout>;
};

export default ChangePassword;
