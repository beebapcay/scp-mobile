import React, { FC } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import styles from "../style";
import { UserForm, UserProfile } from "../../../models";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import { resetUserInfo, updateUserInfo } from "../slice";
import { useEffect } from "react";
import { validateEmail, validateName } from "../../../common/util/common";

interface Props {
  isEdit: boolean;
  setIsEdit: Function;
  disabled: boolean;
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
        disabled={props.disabled}
        style={props.disabled ? styles.saveBtnDisable : styles.saveBtn}
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
