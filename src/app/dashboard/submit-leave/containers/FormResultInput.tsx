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
  textResult: string;
  textUnit?: string;
  style?: StyleProp<ViewStyle>;
}

const FormResultInput: React.FC<Props> = (props) => {
  const { label, labelHint, textResult, textUnit, style } = props;

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${label}`}</Text>
        {labelHint && <Text style={styles.labelHint}>{`${labelHint}`}</Text>}
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.textResult}>
          {`${textResult}\t`}
          <Text style={styles.textUnit}>{textUnit}</Text>
        </Text>
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

  textResult: {
    flex: 1,
    color: Color.RED900,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    height: 40,
    fontSize: 15,
    marginVertical: 7.5,
    marginHorizontal: 10,
  },
  textUnit: {
    fontWeight: 'normal',
    color: Color.BLACK,
  },
});

export default FormResultInput;
