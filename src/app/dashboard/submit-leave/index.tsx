import React, { FC } from 'react';
import {
  View,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import style from './style';
import { useTranslation } from 'react-i18next';
import AppBar from '../../../common/ui/base/app-bar';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import FormTextInput from './containers/FormTextInput';
import FormDateTimeInput from './containers/FormDateTimeInput';
import FormSelectInput from './containers/FormSelectInput';
import FormResultInput from './containers/FormResultInput';
import FormDialogSelectInput from './containers/FormDialogSelectInput';
import nameJson from './dumpName.json';
import { format } from 'date-fns';

interface Props {}

interface SelectDropdown {
  label: string;
  value: string;
}

interface IFormInput {
  reason: string;
  reasonText: string;
  leaveFrom: { time: string; date: string };
  leaveTo: { time: string; date: string };
  approver: string;
  emailCc: string;
}

const SubmitLeave: FC<Props> = (props) => {
  const history = useHistory();
  const { t } = useTranslation();

  const entryTime = '8:30';
  const exitTime = '18:00';
  const currentDate = format(new Date(), 'MMM dd, yyyy');

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<IFormInput>({ reValidateMode: 'onSubmit' });

  const reasonLeaveDropdown: SelectDropdown[] = [
    { label: t('field.annualLeave'), value: 'annual_leave' },
    { label: t('field.other'), value: 'other' },
  ];

  const resultLeaveDays =
    (new Date(watch('leaveTo')?.date || currentDate).getTime() -
      new Date(watch('leaveFrom')?.date || currentDate).getTime()) /
      (1000 * 3600 * 24) +
    1;

  const rawName = nameJson as any[];
  const nameDropdown: SelectDropdown[] = rawName.map((item) => ({
    label: item.name,
    value: (item.name as string).toLowerCase(),
  }));

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Data submit: ');
    console.log(data);
  };

  return (
    <View style={style.container}>
      <AppBar canGoBack={true} title={t('title.submitLeave')} />

      <ScrollView showsVerticalScrollIndicator={false} style={style.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Dimensions.get('screen').height * 0.2}
        >
          <View style={style.form}>
            <Text style={style.sessionTitle}>{t('title.leaveInfo')}</Text>

            <Controller
              name="reason"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange } }) => (
                <FormSelectInput
                  label={`${t('label.reason')}*:`}
                  placeholder={t('field.reasonPlaceholder')}
                  items={reasonLeaveDropdown}
                  errText={errors.reason ? t('err.inputErr') : undefined}
                  onChange={onChange}
                  style={style.rowInput}
                />
              )}
            />

            <Controller
              name="reasonText"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field: { onChange } }) => (
                <FormTextInput
                  onChange={onChange}
                  label={`${t('label.reasonText')}*:`}
                  labelHint={`(${t('label.reasonTextHint')})`}
                  errText={errors.reasonText ? t('err.inputErr') : undefined}
                  multiline
                  numOfLine={5}
                  placeholder={t('field.reasonTextPlaceholder')}
                  style={style.rowInput}
                />
              )}
            />

            <Controller
              name="leaveFrom"
              control={control}
              // rules={{ required: true }}
              defaultValue={{ time: entryTime, date: currentDate }}
              render={({ field: { onChange } }) => (
                <FormDateTimeInput
                  onChange={onChange}
                  label={`${t('label.leavingFrom')}:`}
                  timeHint={`${t('field.timeHint')}:`}
                  dateHint={`${t('field.dateHint')}:`}
                  defaultValue={{ time: entryTime, date: currentDate }}
                  errText={errors.leaveFrom ? t('err.inputErr') : undefined}
                  style={style.rowInput}
                />
              )}
            />

            <Controller
              name="leaveTo"
              control={control}
              // rules={{ required: true }}
              defaultValue={{ time: exitTime, date: currentDate }}
              render={({ field: { onChange } }) => (
                <FormDateTimeInput
                  onChange={onChange}
                  label={`${t('label.leavingTo')}:`}
                  timeHint={`${t('field.timeHint')}:`}
                  defaultValue={{ time: exitTime, date: currentDate }}
                  dateHint={`${t('field.dateHint')}:`}
                  errText={errors.leaveTo ? t('err.inputErr') : undefined}
                  style={style.rowInput}
                />
              )}
            />

            <FormResultInput
              label={`${t('label.leaveDays')}:`}
              textResult={resultLeaveDays.toString()}
              textUnit={t('unit.days')}
              style={style.rowInput}
            />

            <Text style={style.sessionTitle}>{t('title.leaveControl')}</Text>

            <Controller
              name="approver"
              control={control}
              defaultValue=""
              render={({ field: { onChange } }) => (
                <FormDialogSelectInput
                  label={`${t('label.approver')}:`}
                  placeholder={t('field.approverPlaceholder')}
                  onChange={onChange}
                  items={nameDropdown}
                  style={style.rowInput}
                  errText={errors.approver ? t('err.inputErr') : undefined}
                />
              )}
            />

            {/* <Text style={style.sessionTitle}>{t('title.emailCc')}</Text> */}

            <Controller
              name="emailCc"
              control={control}
              rules={{ pattern: /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4};?)+$/ }}
              defaultValue=""
              render={({ field: { onChange } }) => (
                <FormTextInput
                  label={`${t('label.emailCc')}:`}
                  placeholder={t('field.emailCcPlaceholder')}
                  multiline
                  errText={errors.emailCc ? t('err.inputErr') : undefined}
                  numOfLine={5}
                  onChange={onChange}
                  style={style.rowInput}
                />
              )}
            />
          </View>

          <View style={style.actions}>
            <TouchableOpacity
              style={style.submit}
              activeOpacity={0.8}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={style.submitText}>{t('action.submit')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.cancel}
              activeOpacity={0.8}
              onPress={() => history.goBack()}
            >
              <Text style={style.cancelText}>{t('action.cancel')}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SubmitLeave;
