import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import styles from "./style";

interface Props {
  children: ReactNode;
}

const CardViewLayout = (props: Props) => {
  const { t } = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <Text style={styles.title}>{t("title.forgotPassword")}</Text>
          {props.children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardViewLayout;
