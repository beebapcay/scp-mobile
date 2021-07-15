import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { ScrollView, StyleSheet, View, Text, FlatList } from "react-native";
import { maxItemPerPage } from "../../../const/constant";
import { Color } from "../../../enum/enum";
import { getSection } from "../../../util/utilities";
import DashboardHeader from "./DashboardHeader";
import DashboardRow, { DashboardRowProps } from "./DashboardRow";
import PageSelection from "./PageSelection";
import style from "./style";

//! Sample data
const data: DashboardRowProps[] = [
  { key: '1', no: 1, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '2', no: 2, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '3', no: 3, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '4', no: 4, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '5', no: 5, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '6', no: 6, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '7', no: 7, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '8', no: 8, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '9', no: 9, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '10', no: 10, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '11', no: 11, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '12', no: 12, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '13', no: 13, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '14', no: 14, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '15', no: 15, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '16', no: 16, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '17', no: 17, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '18', no: 18, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '19', no: 19, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '20', no: 20, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '21', no: 21, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '22', no: 22, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '23', no: 23, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '24', no: 24, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '25', no: 25, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '26', no: 26, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '27', no: 27, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '28', no: 28, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '29', no: 29, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '30', no: 30, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '31', no: 31, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '32', no: 32, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '33', no: 33, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '34', no: 34, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '35', no: 35, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '36', no: 36, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '37', no: 37, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '38', no: 38, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '39', no: 39, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '40', no: 40, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '41', no: 41, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '42', no: 42, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '43', no: 43, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '44', no: 44, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '45', no: 45, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '46', no: 46, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '47', no: 47, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '48', no: 48, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '49', no: 49, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '50', no: 50, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '51', no: 51, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '52', no: 52, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '53', no: 53, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '54', no: 54, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '55', no: 55, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '56', no: 56, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '57', no: 57, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '58', no: 58, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '59', no: 59, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '60', no: 60, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '61', no: 61, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '62', no: 62, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '63', no: 63, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '64', no: 64, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '65', no: 65, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '66', no: 66, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '67', no: 67, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '68', no: 68, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '69', no: 69, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '70', no: 70, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '71', no: 71, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '72', no: 72, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '73', no: 73, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
  { key: '74', no: 74, from: new Date(), to: new Date(), days: 1, status: 'OK', approver: 'Nguyen Van A', reason: 'Annual  leave' },
]

interface Props { };

interface DashboardRowIndexProps {
  item: DashboardRowProps;
  index: number;
};

const Dashboard: FC<Props> = (props: Props) => {
  // Props
  const [pageIndex, setPageIndex] = useState<number>(0);
  const section = getSection(data, pageIndex, maxItemPerPage);
  const [dataSection, setDataSection] = useState<DashboardRowProps[]>(section);

  // Display
  const renderDashboardHeader = (): JSX.Element => {
    return <DashboardHeader />
  }
  const renderDashboardRow = (rowProps: DashboardRowIndexProps): JSX.Element => {
    // Props
    const { item, index } = rowProps;

    // Style
    const internalStyle = StyleSheet.create({
      container: {
        backgroundColor: index % 2 === 0 ? 'white' : Color.LIGHT_GRAY
      },
    });

    // Component
    return (
      <View style={internalStyle.container}>
        <DashboardRow {...item} />
      </View>
    );
  }
  const keyExtractor = (item: DashboardRowProps): string => {
    return item.no.toString();
  }

  // Events
  const onPageChanged = (index: number): void => {
    setPageIndex(index);
    setDataSection(getSection(data, index, maxItemPerPage));
  }

  // Component
  return (
    <ScrollView style={style.container}>

      <StatusBar style="auto" />

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

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
          style={style.flatlist}
          data={dataSection}
          scrollEnabled={false}
          ListHeaderComponent={renderDashboardHeader}
          renderItem={({ item, index }) => <DashboardRow {...item} />} />

      </ScrollView>

      <PageSelection
        maxItemPerPage={maxItemPerPage}
        totalItem={data.length}
        onPageChanged={onPageChanged} />

    </ScrollView>
  )
}

export default Dashboard;
