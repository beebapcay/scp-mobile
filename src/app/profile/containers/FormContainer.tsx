import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { UserFormInput, UserProfile } from "../../../models";
import { EMAIL_PATTERN, NAME_PATTERN } from "../../../common/util/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import { updateUserInfo } from "../slice";
import BtnContainer from "./BtnContainer";
import { CInputError, CInput } from "../../../common/ui/base/input";
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

  const [isEdited, setIsEdited] = useState<boolean>(false);

  const onChangeUserInfo: SubmitHandler<UserFormInput> = (
    data: UserFormInput
  ): void => {
    if (
      !(
        data.firstName === userInfo?.first_name &&
        data.lastName === userInfo?.last_name &&
        data.email === userInfo?.email
      )
    ) {
      setIsEdited(false);
      dispatch(updateUserInfo(data));
    } else {
      setIsEdited(true);
    }
  };

  const onChangeUserInfoInValid: SubmitErrorHandler<UserFormInput> = (_) => {
    setIsEdited(true);
  };

  const onSubmit = handleSubmit(onChangeUserInfo, onChangeUserInfoInValid);

  const resetInfo = (): void => {
    if (userInfo) {
      setValue("lastName", userInfo.last_name);
      setValue("firstName", userInfo.first_name);
      setValue("email", userInfo.email);
      setIsEdited(false);
    }
  };

  return (
    <View style={styles.formView}>
      <AvatarContainer isEdit={isEdited} />
      <Text style={styles.label}>Tên: </Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: "Trường này là bắt buộc" },
          pattern: { value: NAME_PATTERN, message: "Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            valid={!errors.firstName}
            errorText={errors?.firstName?.message}
            onChangeText={onChange}
            value={value}
            isEdited={isEdited}
          />
        )}
        name="firstName"
        defaultValue={userInfo.first_name}
      />
      {errors.firstName && <CInputError value={errors.firstName?.message} />}

      <Text style={styles.label}>Họ: </Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: "Trường này là bắt buộc" },
          pattern: { value: NAME_PATTERN, message: "Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            valid={!errors.lastName}
            errorText={errors?.lastName?.message}
            onChangeText={onChange}
            value={value}
            isEdited={isEdited}
          />
        )}
        name="lastName"
        defaultValue={userInfo.last_name}
      />
      {errors.lastName && <CInputError value={errors.lastName?.message} />}

      <Text style={styles.label}>Địa chỉ Email: </Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: "Trường này là bắt buộc" },
          pattern: { value: EMAIL_PATTERN, message: "Không đúng định dạng" },
        }}
        render={({ field: { onChange, value } }) => (
          <CInput
            valid={!errors.email}
            errorText={errors?.email?.message}
            onChangeText={onChange}
            value={value}
            isEdited={isEdited}
          />
        )}
        name="email"
        defaultValue={userInfo.email}
      />
      {errors.email && <CInputError value={errors.email?.message} />}

      <BtnContainer
        save={onSubmit}
        reset={resetInfo}
        isEdited={isEdited}
        setIsEdited={setIsEdited}
      />
    </View>
  );
};

export default FormContainer;
