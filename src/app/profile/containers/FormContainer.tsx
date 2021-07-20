import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { UserFormInput, UserProfile } from "../../../models";
import { EMAIL_PATTERN, NAME_PATTERN } from "../../../common/util/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import { updateUserInfo } from "../slice";
import BtnContainer from "./BtnContainer";
import CInput from "./CInput";
import AvatarContainer from "./AvatarContainer";
import styles from "../style";

interface Props {}

const FormContainer: FC<Props> = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormInput>();
  const userInfo: UserProfile = useSelector(
    (state: RootState) => state.profile.userInfo
  );
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onSubmit = handleSubmit((data) => dispatch(updateUserInfo(data)));

  const resetInfo = (): void => {
    if (userInfo) {
      setValue("lastName", userInfo.last_name);
      setValue("firstName", userInfo.first_name);
      setValue("email", userInfo.email);
    }
  };

  return (
    <View style={styles.formView}>
      <AvatarContainer isEdit={isEdit} />
      <Controller
        control={control}
        rules={{
          required: { value: true, message: "*Không được bỏ trống" },
          pattern: { value: NAME_PATTERN, message: "Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            label="Tên"
            error={errors.firstName}
            errorText={errors?.firstName?.message}
            onChangeText={onChange}
            value={value}
            isEdit={isEdit}
          />
        )}
        name="firstName"
        defaultValue={userInfo.first_name}
      />
      {errors.firstName && (
        <Text style={{ color: "red" }}>{errors.firstName.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: { value: true, message: "*Không được bỏ trống" },
          pattern: { value: NAME_PATTERN, message: "Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            label="Họ"
            error={errors.lastName}
            errorText={errors?.lastName?.message}
            onChangeText={onChange}
            value={value}
            isEdit={isEdit}
          />
        )}
        name="lastName"
        defaultValue={userInfo.last_name}
      />
      {errors.lastName && (
        <Text style={{ color: "red" }}>{errors.lastName.message}</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: { value: true, message: "*Không được bỏ trống" },
          pattern: { value: EMAIL_PATTERN, message: "*Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            label="Địa chỉ Email"
            error={errors.email}
            errorText={errors?.email?.message}
            onChangeText={onChange}
            value={value}
            isEdit={isEdit}
          />
        )}
        name="email"
        defaultValue={userInfo.email}
      />
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}

      <BtnContainer
        save={onSubmit}
        reset={resetInfo}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </View>
  );
};

export default FormContainer;
