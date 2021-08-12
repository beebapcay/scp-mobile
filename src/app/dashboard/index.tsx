import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { RouteComponentProps, useHistory } from 'react-router-native';
import { maxItemPerPage as maxItemPerSection } from '../../common/const/constant';
import AppBar from '../../common/ui/base/app-bar';
import { InfiniteTable } from '../../common/ui/base/table';
import TableRow from '../../common/ui/base/table/row/TableRow';
import { ScreenURL } from '../../models/enum';
import { dataTemp as data } from './dataTemp';
import style from './style';

type DashboardRowType = {
  no: number;
  from: Date;
  days: number;
  approver: string;
}

interface Props extends RouteComponentProps { }

const Dashboard: FC<Props> = (props: Props) => {
  // Props
  const [sectionCount, setSectionCount] = useState<number>(1);
  const [dataSection, setDataSection] = useState<DashboardRowType[]>(data.slice(0, sectionCount * maxItemPerSection));
  const columnRatio: number[] = [2, 3, 2, 5];
  const headers: string[] = ['No.', 'From', 'Days', 'Approver'];
  const history = useHistory<{}>();
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);

  // Supporting function
  async function fetchData(): Promise<void> {
    if (sectionCount >= Math.ceil(data.length / maxItemPerSection))
      return;

    await new Promise<void>(() => setTimeout(() => {
      const newSectionCount = sectionCount + 1;
      setSectionCount(newSectionCount);
      setDataSection(data.slice(0, Math.min(data.length, newSectionCount * maxItemPerSection)));
    }));
  }

  // Events
  async function onNearEndReached(): Promise<void> {
    setIsLoadMore(false);
    await fetchData();
    setIsLoadMore(true);
  }
  function onDashboardRowPressed(index: number): void {
    history.push(ScreenURL.PERSON_DASHBOARD, { ...dataSection[index] });
  }

  // Component
  return (
    <View style={style.container}>

      <AppBar title='Leave statistic' />

      <View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day used:</Text>
          <Text style={style.columnValue}>5.5 day(s)</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day available:</Text>
          <Text style={style.columnValue}>10.5 day(s)</Text>
        </View>
      </View>

      <InfiniteTable
        style={style.table}
        headers={headers}
        columnRatio={columnRatio}
        onNearEndReached={onNearEndReached}
        isLoadMore={isLoadMore}
      >
        {dataSection.map((item: DashboardRowType, index: number) => (
          <TableRow
            key={index}
            columnRatio={columnRatio}
            onPress={() => onDashboardRowPressed(index)}
          >
            {item.no}
            {item.from.toLocaleDateString()}
            {item.days}
            {item.approver}
          </TableRow>
        ))}
      </InfiniteTable>

    </View>
  );
};

export default Dashboard;
