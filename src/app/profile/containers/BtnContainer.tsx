import React, { FC } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import styles from "../style";

interface Props {
  isEdited: boolean;
  setIsEdited: (isEdit: boolean) => void;
  reset: () => void;
  save: () => void;
}

const BtnContainer: FC<Props> = (props: Props) => {
  const SaveAlert = (): void =>
    Alert.alert(
      "Lưu thông tin",
      "Bạn đã chắc chắn muốn lưu lại thông tin này",
      [
        {
          text: "Huỷ",
          style: "cancel",
        },
        {
          text: "Lưu",
          onPress: () => {
            props.save();
            props.setIsEdited(!props.isEdited);
          },
        },
      ]
    );

  return (
    <View style={styles.btnView}>
      {props.isEdited ? (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            props.reset();
          }}
        >
          <Text style={styles.editBtnText}>Huỷ</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            props.setIsEdited(!props.isEdited);
          }}
        >
          <Text style={styles.editBtnText}>Chỉnh sửa</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        disabled={!props.isEdited}
        style={!props.isEdited ? styles.saveBtnDisable : styles.saveBtn}
        onPress={() => {
          SaveAlert();
        }}
      >
        <Text style={styles.saveBtnText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnContainer;
