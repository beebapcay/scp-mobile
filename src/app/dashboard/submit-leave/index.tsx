import React, { FC, useState } from 'react';
import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import style from './style';
import { useTranslation } from 'react-i18next';
import AppBar from '../../../common/ui/layout/app-bar';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import FormTextInput from './containers/FormTextInput';
import FormDateTimeInput from './containers/FormDateTimeInput';
import FormSelectInput from './containers/FormSelectInput';
import FormResultInput from './containers/FormResultInput';

interface Props {}

interface SelectDropdown {
  label: string;
  value: string;
}

interface IFormInput {
  reason: string;
  reasonText: string;
  destinationLeave: string;
  timeLeaveFrom: string;
  dateLeaveFrom: string;
  timeLeaveTo: string;
  dateLeaveTo: string;
  emailCc: string;
}

const SubmitLeave: FC<Props> = (props) => {
  const history = useHistory();
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ reValidateMode: 'onSubmit' });

  const reasonLeaveDropdown: SelectDropdown[] = [
    { label: t('field.annualLeave'), value: 'annual_leave' },
    { label: t('field.other'), value: 'other' },
  ];

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppBar canGoBack={true} title={t('title.submitLeave')} />
      <ScrollView showsVerticalScrollIndicator={false} style={style.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Dimensions.get('screen').height * 0.2}
        >
          <View style={style.form}>
            <Text style={style.sessionTitle}>{t('title.leaveInfo')}</Text>

            <FormSelectInput
              label={`${t('label.reason')}*:`}
              placeholder={t('field.reasonPlaceholder')}
              items={reasonLeaveDropdown}
              style={style.rowInput}
            />

            <FormTextInput
              label={`${t('label.reasonText')}*:`}
              labelHint={`(${t('label.reasonTextHint')})`}
              multiline
              numOfLine={5}
              placeholder={t('field.reasonTextPlaceholder')}
              style={style.rowInput}
            />

            <FormTextInput
              label={`${t('label.destinationLeave')}*:`}
              placeholder={t('field.destinationLeavePlaceholder')}
              style={style.rowInput}
            />

            <FormDateTimeInput
              label={`${t('label.leavingFrom')}:`}
              timeHint={`${t('field.timeHint')}:`}
              dateHint={`${t('field.dateHint')}:`}
              style={style.rowInput}
            />

            <FormDateTimeInput
              label={`${t('label.leavingTo')}:`}
              timeHint={`${t('field.timeHint')}:`}
              dateHint={`${t('field.dateHint')}:`}
              style={style.rowInput}
            />

            <FormResultInput
              label={`${t('label.leaveDays')}:`}
              textResult="1"
              textUnit={t('unit.days')}
              style={style.rowInput}
            />

            <FormResultInput
              label={`${t('label.deductedDays')}:`}
              textResult="1"
              textUnit={t('unit.days')}
              style={style.rowInput}
            />

            <Text style={style.sessionTitle}>{t('title.emailCc')}</Text>

            <FormTextInput
              label={`${t('label.emailCc')}*:`}
              placeholder={t('field.emailCcPlaceholder')}
              multiline
              numOfLine={5}
              style={style.rowInput}
            />
          </View>

          <View style={style.actions}>
            <TouchableOpacity style={style.submit} activeOpacity={0.8}>
              <Text style={style.submitText}>{t('action.submit')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.cancel} activeOpacity={0.8}>
              <Text style={style.cancelText}>{t('action.cancel')}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SubmitLeave;
