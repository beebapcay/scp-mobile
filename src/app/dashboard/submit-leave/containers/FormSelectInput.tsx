import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Color } from '../../../../common/enum/enum';

interface Props {
  label: string;
  labelHint?: string;
  items: any[];
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
}

const FormSelectInput: React.FC<Props> = (props) => {
  const { label, labelHint, items, placeholder, style } = props;

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${label}`}</Text>
        {labelHint && <Text style={styles.labelHint}>{`${labelHint}`}</Text>}
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={() => {}}
            placeholder={{
              label: placeholder,
              value: null,
              color: Color.GRAY,
            }}
            items={items}
          />
        </View>
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

  pickerContainer: {
    flex: 1,
    height: 40,
    borderColor: Color.GRAY,
    backgroundColor: Color.WHITE,
    borderWidth: 1.5,
    marginVertical: 7.5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
});

export default FormSelectInput;
