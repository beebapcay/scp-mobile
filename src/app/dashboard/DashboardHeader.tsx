import React, { FC } from 'react';
import { View, Text } from 'react-native';
import style from './style';

export interface DashboardHeaderProps { }

const DashboardHeader: FC<DashboardHeaderProps> = (props: DashboardHeaderProps) =>
  // Component
  (
    <View style={style.headerContainer}>
      <View style={style.columnNo}>
        <Text style={style.headerTextCell}>No.</Text>
      </View>
      <View style={style.columnFrom}>
        <Text style={style.headerTextCell}>From</Text>
      </View>
      <View style={style.columnTo}>
        <Text style={style.headerTextCell}>To</Text>
      </View>
      <View style={style.columnDays}>
        <Text style={style.headerTextCell}>Days</Text>
      </View>
      <View style={style.columnReason}>
        <Text style={style.headerTextCell}>Reason</Text>
      </View>
      <View style={style.columnStatus}>
        <Text style={style.headerTextCell}>Status</Text>
      </View>
      <View style={style.columnApprover}>
        <Text style={style.headerTextCell}>Approver</Text>
      </View>
    </View>
  );
export default DashboardHeader;
