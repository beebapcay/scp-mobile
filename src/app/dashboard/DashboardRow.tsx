import React, { FC } from 'react';
import { View, Text } from 'react-native';
import style from './style';

export interface DashboardRowProps {
  no: number;
  from: Date;
  to: Date;
  days: number;
  reason: string;
  status: string;
  approver: string;
}

const DashboardRow = (props: DashboardRowProps): JSX.Element => {
  // Props
  const {
    no,
    from,
    to,
    days,
    reason,
    status,
    approver,
  } = props;

  // Component
  return (
    <View style={style.rowContainer}>
      <View style={style.columnNo}>
        <Text style={style.textCell}>{no}</Text>
      </View>
      <View style={style.columnFrom}>
        <Text style={style.textCell}>{from.toLocaleDateString()}</Text>
      </View>
      <View style={style.columnTo}>
        <Text style={style.textCell}>{to.toLocaleDateString()}</Text>
      </View>
      <View style={style.columnDays}>
        <Text style={style.textCell}>{days}</Text>
      </View>
      <View style={style.columnReason}>
        <Text style={style.textCell}>{reason}</Text>
      </View>
      <View style={style.columnStatus}>
        <Text style={style.textCell}>{status}</Text>
      </View>
      <View style={style.columnApprover}>
        <Text style={style.textCell}>{approver}</Text>
      </View>
    </View>
  );
};

export default DashboardRow;
