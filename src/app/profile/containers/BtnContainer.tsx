import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { View, Alert } from "react-native";
import { CButton } from "../../../common/ui/base";
import styles from "../style";

interface Props {
  isEdited: boolean;
  setIsEdited: (isEdit: boolean) => void;
  reset: () => void;
  save: () => void;
}

const BtnContainer: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
  const SaveAlert = (): void =>
    Alert.alert(t("alert.save.title"), t("alert.save.description"), [
      {
        text: t("btn.cancel"),
        style: "cancel",
      },
      {
        text: t("btn.save"),
        onPress: () => {
          props.save();
          props.setIsEdited(!props.isEdited);
        },
      },
    ]);

  return (
    <View style={styles.btnView}>
      {props.isEdited ? (
        <CButton title={t("btn.cancel")} outline={true} onPress={props.reset} />
      ) : (
        <CButton
          title={t("btn.edit")}
          outline={true}
          onPress={() => props.setIsEdited(!props.isEdited)}
        />
      )}
      <CButton
        title={t("btn.save")}
        outline={false}
        disabled={!props.isEdited}
        onPress={SaveAlert}
      />
    </View>
  );
};

export default BtnContainer;
