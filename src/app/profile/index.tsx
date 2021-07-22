import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import MainLayout from "../../common/ui/layout/main-layout";
import styles from "./style";
import FormContainer from "./containers/FormContainer";
import { CButtonCircle } from "../../common/ui/base";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

interface Props {}

const Profile: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainLayout title="Thông tin chung">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 20,
            position: "relative",
          }}
        >
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.settingContainer}>
                <View style={styles.settingView}>
                  <View style={styles.menuSettingView}>
                    <TouchableOpacity
                      style={{ alignItems: "center" }}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text>{t("label.changePass")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ alignItems: "center", marginTop: 8 }}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text>{t("label.logout")}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <CButtonCircle onPress={() => setModalVisible(!modalVisible)}>
            <Feather name="settings" size={24} color="white" />
          </CButtonCircle>
        </View>
        <FormContainer />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </MainLayout>
  );
};

export default Profile;
