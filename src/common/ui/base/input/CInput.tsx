import React, { FC } from "react";
import { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  valid: boolean;
  errorText?: string;
  isEdited: boolean;
}

const CInput: FC<Props> = (props: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <View>
      <TextInput
        editable={props.isEdited}
        style={
          props.valid
            ? isFocus
              ? styles.focusInput
              : styles.unfocusInput
            : styles.invalidInput
        }
        onChangeText={(text: string) => props.onChangeText(text)}
        value={props.value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </View>
  );
};

export default CInput;
