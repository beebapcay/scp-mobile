import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import MainLayout from "../../common/ui/layout/main-layout";
import styles from "./style";
import FormContainer from "./containers/FormContainer";
import { CButtonCircle } from "../../common/ui/base";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { ScreenURL } from "../../models/enum";
import { RouteComponentProps } from "react-router-native";

interface Props extends RouteComponentProps {}

const Profile: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainLayout title={t("title.profile")}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "position" : undefined}
          keyboardVerticalOffset={Dimensions.get("screen").height * 0.2}
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
              transparent
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                <View style={styles.settingContainer}>
                  <View style={styles.settingView}>
                    <TouchableOpacity
                      style={{ alignItems: "center" }}
                      onPress={() =>
                        props.history.push(ScreenURL.CHANGE_PASSWORD)
                      }
                    >
                      <Text>{t("label.changePass")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ alignItems: "center", marginTop: 8 }}
                      onPress={() => props.history.push(ScreenURL.HOME)}
                    >
                      <Text>{t("label.logout")}</Text>
                    </TouchableOpacity>
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
      </ScrollView>
    </MainLayout>
  );
};

export default Profile;
