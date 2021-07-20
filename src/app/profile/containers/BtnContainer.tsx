import React, { FC } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import styles from "../style";

interface Props {
  isEdit: boolean;
  setIsEdit: Function;
  save: Function;
  reset: Function;
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
            props.setIsEdit(!props.isEdit);
          },
        },
      ]
    );

  return (
    <View style={styles.btnView}>
      {props.isEdit ? (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            props.setIsEdit(!props.isEdit);
            props.reset();
          }}
        >
          <Text style={styles.editBtnText}>Huỷ</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            props.setIsEdit(!props.isEdit);
          }}
        >
          <Text style={styles.editBtnText}>Chỉnh sửa</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        disabled={!props.isEdit}
        style={!props.isEdit ? styles.saveBtnDisable : styles.saveBtn}
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
