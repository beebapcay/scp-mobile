import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { Color } from '../../../../common/enum/enum';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
  label: string;
  labelHint?: string;
  timeHint?: string;
  dateHint?: string;
  style?: StyleProp<ViewStyle>;
}

const FormDateTimeInput: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const { label, labelHint, timeHint, dateHint, style } = props;

  const showTimePicker = () => {
    setShow(true);

    setMode('time');
  };

  const showDatePicker = () => {
    setShow(true);

    setMode('date');
  };

  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{`${label}`}</Text>
        {labelHint && <Text style={styles.labelHint}>{`${labelHint}`}</Text>}
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={() => {
            setShow(Platform.OS === 'ios');
          }}
        />
      )}

      <View style={styles.fieldContainer}>
        <View style={styles.datetimePicker}>
          {timeHint && <Text style={styles.pickerHint}>{`${timeHint}`}</Text>}

          <TouchableWithoutFeedback onPress={showTimePicker}>
            <View style={styles.pickerInput}>
              <TextInput
                editable={false}
                style={styles.pickerValue}
                value={'8:30'}
              />
              <MaterialCommunityIcons
                name="clock-outline"
                style={styles.pickerIcon}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={[styles.datetimePicker, { marginTop: 0 }]}>
          {dateHint && <Text style={styles.pickerHint}>{`${dateHint}`}</Text>}

          <TouchableWithoutFeedback onPress={showDatePicker}>
            <View style={styles.pickerInput}>
              <TextInput
                editable={false}
                style={styles.pickerValue}
                value={'13/12/2021'}
              />
              <MaterialCommunityIcons
                name="calendar-today"
                style={styles.pickerIcon}
              />
            </View>
          </TouchableWithoutFeedback>
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

  datetimePicker: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 7.5,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  pickerHint: {
    flex: 1,
    color: Color.BLACK,
    fontSize: 14,
    textAlign: 'right',
    marginRight: 10,
  },
  pickerInput: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 12.5,
    backgroundColor: Color.WHITE,
    borderWidth: 1.5,
    borderColor: Color.GRAY,
  },
  pickerValue: {
    backgroundColor: Color.WHITE,
    flex: 1,
    fontSize: 15,
    borderWidth: 0,
  },
  pickerIcon: {
    fontSize: 24,
    color: Color.GRAY,
  },
});

export default FormDateTimeInput;
