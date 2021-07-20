import React, { FC } from "react";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import styles from "../style";

interface Props {
  label: string;
  value: string;
  onChangeText: Function;
  error: FieldError | undefined;
  errorText?: string;
  isEdit: boolean;
}

const CInput: FC<Props> = (props: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <View>
      <Text style={styles.titleInput}>{props.label}: </Text>
      <TextInput
        editable={props.isEdit}
        style={[
          isFocus ? styles.focusInput : styles.unfocusInput,
          props.error && styles.invalidInput,
        ]}
        onChangeText={(text: string) => props.onChangeText(text)}
        value={props.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {!props.errorText && (
        <Text style={{ color: "red" }}>{props.errorText}</Text>
      )}
    </View>
  );
};

export default CInput;
