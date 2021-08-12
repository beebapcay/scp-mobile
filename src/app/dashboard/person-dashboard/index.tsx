import React, { FC } from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import AppBar from '../../../common/ui/base/app-bar';
import { InfiniteTable } from '../../../common/ui/base/table';
import TableRow from '../../../common/ui/base/table/row/TableRow';
import style from './style';

export type PersonDashboardType = {
  no: number;
  from: Date;
  to: Date;
  // days: number;
  reason: string;
  status: string;
  approver: string;
}

interface Props {

}

const PersonDashboard: FC<Props> = (props: Props) => {
  // Props
  const history = useHistory<PersonDashboardType>();
  const state = history.location.state;
  const columnRatio = [2, 4];
  const content = {
    titles: [
      'No.',
      'From',
      'To',
      'Reason',
      'Status',
      'Approver'
    ],
    values: [
      state.no,
      state.from.toLocaleDateString(),
      state.to.toLocaleDateString(),
      state.reason,
      state.status,
      state.approver],
  };

  // Component
  return (
    <View style={style.container}>

      <AppBar canGoBack={true} title='Person dashboard' />

      <InfiniteTable style={style.table} columnRatio={columnRatio}>
        {content.titles.map((title: string, index: number) => (
          <TableRow columnRatio={columnRatio} key={index}>
            {title}
            {content.values[index]}
          </TableRow>
        ))}
      </InfiniteTable>

    </View>
  );
}

export default PersonDashboard
