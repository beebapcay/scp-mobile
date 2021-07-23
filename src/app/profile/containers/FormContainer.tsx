import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { UserFormInput, UserProfile } from "../../../models";
import { EMAIL_PATTERN } from "../../../common/util/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import { updateUserInfo } from "../slice";
import BtnContainer from "./BtnContainer";
import { CInputError, CInput } from "../../../common/ui/base";
import AvatarContainer from "./AvatarContainer";
import styles from "../style";
import { useTranslation } from "react-i18next";

interface Props {}

const FormContainer: FC<Props> = (props: Props) => {
  const { t } = useTranslation();
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

  const [dataAvatar, setDataAvatar] = useState<string | null>(userInfo.avatar);
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const onChangeUserInfo: SubmitHandler<UserFormInput> = (
    data: UserFormInput
  ): void => {
    if (
      !(
        data.avatar === userInfo.avatar &&
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
      setValue("avatar", dataAvatar);
      setValue("lastName", userInfo.last_name);
      setValue("firstName", userInfo.first_name);
      setValue("email", userInfo.email);
      setIsEdited(false);
    }
  };

  return (
    <View style={styles.formView}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <AvatarContainer
            value={value}
            isEdit={isEdited}
            onChangeAvatar={onChange}
          />
        )}
        name="avatar"
        defaultValue={dataAvatar}
      />

      <Text style={styles.label}>{t("field.firstName")}</Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: t("field.error.required") },
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

      <Text style={styles.label}>{t("field.lastName")}</Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: t("field.error.required") },
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

      <Text style={styles.label}>{t("field.email")}</Text>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: t("field.error.required") },
          pattern: { value: EMAIL_PATTERN, message: t("field.error.email") },
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
