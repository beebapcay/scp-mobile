import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";

interface Props {
  title: string;
  outline: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const CButton: FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      style={
        props.outline
          ? styles.outlineBtn
          : props.disabled
          ? styles.defaultBtnDisabled
          : styles.defaultBtn
      }
      disabled={props.disabled}
      onPress={() => props.onPress()}
    >
      <Text
        style={props.outline ? styles.outlineBtnText : styles.defaultBtnText}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CButton;
