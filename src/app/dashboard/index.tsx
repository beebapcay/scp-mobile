import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RouteComponentProps, useHistory } from 'react-router-native';
import { maxItemPerPage as maxItemPerSection } from '../../common/const/constant';
import { InfiniteTable } from '../../common/ui/base/table';
import TableRow from '../../common/ui/base/table/row/TableRow';
import AppBar from '../../common/ui/layout/app-bar';
import { ScreenURL } from '../../models/enum';
import { dataTemp as data } from './dataTemp';
import { CButton } from '../../common/ui/base';
import { Color } from '../../common/enum/enum';
import IconButton from '../../common/ui/base/button/IconButton';
import { useTranslation } from 'react-i18next';
import style from './style';

type DashboardRowType = {
  no: number;
  from: Date;
  days: number;
  approver: string;
};

interface Props extends RouteComponentProps {}

const Dashboard: FC<Props> = (props: Props) => {
  // Props
  const { t } = useTranslation();
  const [sectionCount, setSectionCount] = useState<number>(1);
  const [dataSection, setDataSection] = useState<DashboardRowType[]>(
    data.slice(0, sectionCount * maxItemPerSection)
  );
  const columnRatio: number[] = [2, 3, 2, 5];
  const headers: string[] = ['No.', 'From', 'Days', 'Approver'];
  const history = useHistory();

  // Supporting function
  function fetchData(): void {
    if (sectionCount >= Math.ceil(data.length / maxItemPerSection)) return;

    const newSectionCount = sectionCount + 1;
    setSectionCount(newSectionCount);
    setDataSection(
      data.slice(0, Math.min(data.length, newSectionCount * maxItemPerSection))
    );
  }

  // Events
  function onNearEndReached(): void {
    fetchData();
  }
  function onDashboardRowPressed(index: number): void {
    history.push(ScreenURL.PERSON_DASHBOARD, { ...dataSection[index] });
  }
  const onSubmitLeaveBtnPressed = (): void => {
    history.push(ScreenURL.SUBMIT_LEAVE);
  };

  // Component
  return (
    <View style={style.container}>
      <AppBar title="Leave statistic">
        <TouchableOpacity
          style={style.avatarButton}
          onPress={() => props.history.push(ScreenURL.PROFILE)}
        >
          <Image
            style={style.avatarImage}
            source={require('../../../assets/icons/profile.png')}
          />
        </TouchableOpacity>
      </AppBar>

      <View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day used:</Text>
          <Text style={style.columnValue}>5.5 day(s)</Text>
        </View>
        <View style={style.rowContainer}>
          <Text style={style.columnInfo}>Day available:</Text>
          <Text style={style.columnValue}>10.5 day(s)</Text>
        </View>
        <IconButton
          iconName="calendar-edit"
          title={t('label.submitLeave')}
          onPress={onSubmitLeaveBtnPressed}
          backgroundColor={Color.BLUE500}
          color={Color.WHITE}
          style={style.submitBtn}
        />
      </View>

      <InfiniteTable
        style={style.table}
        headers={headers}
        columnRatio={columnRatio}
        onNearEndReached={onNearEndReached}
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
