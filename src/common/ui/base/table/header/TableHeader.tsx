import React, { FC, ReactChild, ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from './style';

export interface TableHeaderProps {
  children: ReactChild[];
  columnRatio?: number[];
}

const TableHeader: FC<TableHeaderProps> = (props: TableHeaderProps) => {
  // Props
  const { children, columnRatio } = props;

  // Header columns
  const headers: JSX.Element[] = children.map((item: ReactNode, index: number) => {
    // Style
    const headerStyle = StyleSheet.create({
      cell: {
        flex: columnRatio?.[index] ?? 1,
        padding: 8,
      },
    });

    // Component
    return (
      <View style={headerStyle.cell} key={index}>
        {(typeof item === 'string' || typeof item === 'number')
          ? <Text style={style.text}>{item}</Text>
          : { item }}
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
