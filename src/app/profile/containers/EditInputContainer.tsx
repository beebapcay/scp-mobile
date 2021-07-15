import React, { FC, useEffect } from "react";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../style";

interface Props {
  value: string;
  title: string;
  isEdit: boolean;
  isValid: Function;
  onChangeText: Function;
}

const EditInput: FC<Props> = (props: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(props.isValid(props.value));

  useEffect(() => {
    setIsValid(props.isValid(props.value));
    if (props.value === "") setIsEmpty(true);
    else setIsEmpty(false);
  });

  return (
    <View>
      <View style={styles.editInput}>
        <Text style={styles.titleInput}>{props.title}: </Text>
        <TextInput
          style={
            isValid
              ? isFocus
                ? styles.focusInput
                : styles.unfocusInput
              : styles.invalidInput
          }
          editable={props.isEdit}
          onChangeText={(e) => {
            props.onChangeText(e);
          }}
          value={props.value}
          keyboardType="default"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </View>
      {isEmpty ? (
        <Text style={{ color: "red" }}>
          * {props.title} không được bỏ trống
        </Text>
      ) : isValid ? null : (
        <Text style={{ color: "red" }}>* {props.title} không hợp lệ</Text>
      )}
    </View>
  );
};

export default EditInput;
