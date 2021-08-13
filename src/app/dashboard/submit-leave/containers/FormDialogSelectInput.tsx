import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Color } from '../../../../common/enum/enum';

interface Props {
  label: string;
  labelHint?: string;
  items: any[];
  placeholder?: string;
  errText?: string;
  onChange: (...event: any[]) => void;
  style?: StyleProp<ViewStyle>;
}

const FormDialogSelectInput: React.FC<Props> = (props) => {
  const { label, labelHint, items, placeholder, errText, onChange, style } =
    props;

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${label}`}</Text>
        {labelHint && <Text style={styles.labelHint}>{`${labelHint}`}</Text>}
      </View>

      <View style={styles.fieldContainer}>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={onChange}
            placeholder={{
              label: placeholder,
              value: '',
              color: Color.GRAY,
            }}
            style={styles}
            items={items}
            fixAndroidTouchableBug
          />
        </View>
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
  err: {
    marginBottom: 7.5,
    marginLeft: 10,
    fontSize: 12.5,
    color: Color.RED900,
  },
  inputAndroid: {
    width: '100%',
    height: '100%',
    color: Color.BLACK,
  },
  inputIOS: {
    width: '100%',
    height: '100%',
    color: Color.BLACK,
    paddingHorizontal: 10,
  },
});

export default FormDialogSelectInput;
