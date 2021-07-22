import React, { FC, useState } from 'react';
import {
  ScrollView, View, Text, TouchableWithoutFeedback,
} from 'react-native';
import { RouteComponentProps } from 'react-router-native';
import { maxItemPerPage } from '../../common/const/constant';
import Table from '../../common/ui/base/table';
import PageSelection from '../../common/ui/base/table/pageSelection/PageSelection';
import TableRow from '../../common/ui/base/table/row/TableRow';
import { getSection } from '../../common/util/utilities';
import { ScreenURL } from '../../models/enum';
import style from './style';

interface DashboardRow {
  no: number;
  from: Date;
  to: Date;
  days: number;
  reason: string;
  status: string;
  approver: string;
}

//! Sample data
const data: DashboardRow[] = [
  {
    no: 1,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 2,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 3,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 4,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 5,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 6,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 7,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 8,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 9,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 10,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 11,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 12,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 13,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 14,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 15,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 16,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 17,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 18,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 19,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 20,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 21,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 22,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 23,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 24,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 25,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 26,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 27,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 28,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 29,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 30,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 31,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 32,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 33,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 34,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 35,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 36,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 37,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 38,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 39,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 40,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 41,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 42,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 43,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 44,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 45,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 46,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 47,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 48,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 49,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 50,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 51,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 52,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 53,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 54,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 55,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 56,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 57,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 58,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 59,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 60,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 61,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 62,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 63,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 64,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 65,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 66,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 67,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 68,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 69,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 70,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 71,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 72,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 73,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
  {
    no: 74,
    from: new Date(),
    to: new Date(),
    days: Math.floor(1 + Math.random() * 99),
    status: 'OK',
    approver: 'Nguyen Van A',
    reason: 'Annual  leave',
  },
];

interface Props extends RouteComponentProps {}

const Dashboard: FC<Props> = (props: Props) => {
  // Props
  const [pageIndex, setPageIndex] = useState<number>(0);
  const section = getSection<DashboardRow>(data, pageIndex, maxItemPerPage);
  const [dataSection, setDataSection] = useState<DashboardRow[]>(section);
  const columnRatio: number[] = [0.5, 1, 1, 0.5, 2, 1, 1.5];
  const headers: string[] = [
    'No.',
    'From',
    'To',
    'Days',
    'Reason',
    'Status',
    'Approver',
  ];

  // Events
  const onPageChanged = (index: number): void => {
    setPageIndex(index);
    setDataSection(getSection(data, index, maxItemPerPage));
  };

  // Component
  return (
    <View style={style.container}>
      <View>
        <View style={style.headerContainer}>
          <Text style={style.headerTextCell}>Leave statistic</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day used:</Text>
          <Text style={style.columnValue}>5.5 day(s)</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day available:</Text>
          <Text style={style.columnValue}>10.5 day(s)</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Table width={768} columnRatio={columnRatio} headers={headers}>
          {dataSection.map((item: DashboardRow, index: number) => (
            <TableRow key={index} columnRatio={columnRatio}>
              {item.no}
              {item.from.toLocaleDateString()}
              {item.to.toLocaleDateString()}
              {item.days}
              {item.reason}
              {item.status}
              {item.approver}
            </TableRow>
          ))}
        </Table>
      </ScrollView>

      <PageSelection
        maxItemPerPage={maxItemPerPage}
        totalItem={data.length}
        onPageChanged={onPageChanged}
      />

      <TouchableWithoutFeedback
        onPress={() => props.history.push(ScreenURL.PROFILE)}
      >
        <View style={style.button}>
          <Text style={style.editProfileText}>Profile</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Dashboard;
