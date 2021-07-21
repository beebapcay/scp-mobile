import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import MainLayout from "../../common/ui/layout/main-layout";
import styles from "./style";
import FormContainer from "./containers/FormContainer";

interface Props {}

const Profile: FC<Props> = (props: Props) => {
  return (
    <MainLayout title="Thông tin chung">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <FormContainer />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

export default Profile;
