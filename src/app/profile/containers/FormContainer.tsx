import React, { FC } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import styles from "../style";
import { UserForm, UserProfile } from "../../../models";
import EditInput from "./EditInputContainer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import { resetUserInfo, updateUserInfo } from "../slice";
import { useEffect } from "react";
import AvatarContainer from "./AvatarContainer";
import { validateEmail, validateName } from "../../../common/util/common";
import BtnContainer from "./BtnContainer";

interface Props {}

const Form: FC<Props> = (props: Props) => {
  const userInfo: UserProfile = useSelector(
    (state: RootState) => state.profile.userInfo
  );
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>(userInfo.first_name);
  const [lastName, setLastName] = useState<string>(userInfo.last_name);
  const [email, setEmail] = useState<string>(userInfo.email);

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
            saveInfo();
          },
        },
      ]
    );

  useEffect(() => {
    if (
      (userInfo.first_name === firstName &&
        userInfo.last_name === lastName &&
        userInfo.email === email) ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      !validateEmail(email) ||
      !validateName(firstName) ||
      !validateName(lastName)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

  const saveInfo = (): void => {
    const newInfo: UserForm = {
      firstName: firstName,
      lastname: lastName,
      email: email,
    };
    dispatch(updateUserInfo(newInfo));
  };

  const resetInfo = (): void => {
    dispatch(resetUserInfo());
    setFirstName(userInfo.first_name);
    setLastName(userInfo.last_name);
    setEmail(userInfo.email);
  };

  return (
    <View style={styles.formView}>
      <AvatarContainer isEdit={isEdit} />
      <View style={styles.infoContainer}>
        <EditInput
          onChangeText={setFirstName}
          isEdit={isEdit}
          isValid={validateName}
          title="Tên"
          value={firstName}
        />
        <EditInput
          onChangeText={setLastName}
          isEdit={isEdit}
          isValid={validateName}
          title="Họ"
          value={lastName}
        />
        <EditInput
          onChangeText={setEmail}
          isEdit={isEdit}
          isValid={validateEmail}
          title="Địa chỉ Email"
          value={email}
        />
      </View>

      <BtnContainer
        save={saveInfo}
        reset={resetInfo}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        disabled={disabled}
      />
    </View>
  );
};

export default Form;
