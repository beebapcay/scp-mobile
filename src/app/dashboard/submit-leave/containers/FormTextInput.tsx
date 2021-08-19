import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';
import { Color } from '../../../../common/enum/enum';

interface Props {
  label: string;
  labelHint?: string;
  multiline?: boolean;
  numOfLine?: number;
  placeholder?: string;
  errText?: string;
  onChange: (...event: any[]) => void;
  style?: StyleProp<ViewStyle>;
}

const FormTextInput: React.FC<Props> = (props) => {
  const {
    label,
    labelHint,
    multiline,
    numOfLine,
    errText,
    onChange,
    placeholder,
    style,
  } = props;

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${label}`}</Text>
        {labelHint && <Text style={styles.labelHint}>{`${labelHint}`}</Text>}
      </View>
      <View style={styles.fieldContainer}>
        <TextInput
          placeholder={placeholder}
          multiline={multiline}
          onChangeText={(text) => onChange(text)}
          numberOfLines={numOfLine}
          style={multiline ? styles.textInputMultiline : styles.textInput}
        />
        {errText && <Text style={styles.err}>{errText}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.GRAY300,
  },
  labelContainer: {
    flex: 3.5,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: Color.GRAY400,
  },
  label: {
    color: Color.BLACK,
    fontSize: 15,
    textAlign: 'right',
  },
  labelHint: {
    color: Color.BLACK,
    fontSize: 13.5,
    textAlign: 'right',
    fontStyle: 'italic',
  },
  fieldContainer: {
    flex: 8.5,
    backgroundColor: Color.GRAY300,
  },

  textInputMultiline: {
    flex: 1,
    textAlignVertical: 'top',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Color.WHITE,
    fontSize: 15,
    marginVertical: 7.5,
    marginHorizontal: 10,
    borderWidth: 1.5,
    borderColor: Color.GRAY,
  },

  textInput: {
    flex: 1,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: Color.WHITE,
    fontSize: 15,
    marginVertical: 7.5,
    marginHorizontal: 10,
    borderWidth: 1.5,
    borderColor: Color.GRAY,
  },
  err: {
    marginBottom: 7.5,
    marginLeft: 10,
    fontSize: 12.5,
    color: Color.RED900,
  },
});

export default FormTextInput;
