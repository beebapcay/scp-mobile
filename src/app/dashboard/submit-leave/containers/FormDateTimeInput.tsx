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
import { format } from 'date-fns';

interface Props {
  label: string;
  labelHint?: string;
  timeHint?: string;
  dateHint?: string;
  errText?: string;
  defaultValue?: { time: string; date: string };
  onChange: (...event: any[]) => void;
  style?: StyleProp<ViewStyle>;
}

const FormDateTimeInput: React.FC<Props> = (props) => {
  const {
    label,
    labelHint,
    timeHint,
    dateHint,
    errText,
    defaultValue,
    onChange,
    style,
  } = props;

  const [time, setTime] = useState(defaultValue?.time);
  const [date, setDate] = useState(defaultValue?.date);

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

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
          onChange={(e: any, selectedDate: any) => {
            const currentDate = selectedDate || new Date();
            setShow(Platform.OS === 'ios');
            if (mode === 'date') {
              const formatCurrentDate = format(currentDate, 'MMM dd, yyyy');
              onChange({
                time: defaultValue?.time,
                date: formatCurrentDate,
              });
              setDate(formatCurrentDate);
            } else {
              const formatCurrentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
              onChange({
                time: formatCurrentTime,
                date: format(currentDate, 'MMM dd, yyyy'),
              });
              setTime(formatCurrentTime);
            }
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
                value={time}
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
                value={date}
              />
              <MaterialCommunityIcons
                name="calendar-today"
                style={styles.pickerIcon}
              />
            </View>
          </TouchableWithoutFeedback>
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
    color: Color.BLACK,
    flex: 1,
    fontSize: 15,
    borderWidth: 0,
  },
  pickerIcon: {
    fontSize: 24,
    color: Color.GRAY,
  },
  err: {
    marginBottom: 7.5,
    marginLeft: 10,
    fontSize: 12.5,
    color: Color.RED900,
  },
});

export default FormDateTimeInput;
