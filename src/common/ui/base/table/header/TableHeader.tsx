import React, { FC, ReactChild, ReactText } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from './style';

export interface TableHeaderProps {
  children: ReactText[];
  columnRatio: number[];
}

const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  // Props
  const { children, columnRatio } = props;

  // Header columns
  const headers: ReactChild[] = children.map((item: ReactChild, index: number) => {
    // Style
    const headerStyle = StyleSheet.create({
      cell: {
        flex: columnRatio[index],
        paddingVertical: 10,
      },
    });

    // Component
    return (
      <View style={headerStyle.cell} key={index}>
        <Text style={style.text}>{item}</Text>
      </View>
    );
  });

  // Component
  return (
    <View style={style.container}>
      {headers}
    </View>
  );
};

export default TableHeader;
