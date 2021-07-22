import React, { FC, ReactChild, ReactNode } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import style from './style';

export interface TableRowProps {
  children: ReactChild[];
  columnRatio?: number[];
}

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  // Props
  const { children, columnRatio } = props;

  // Cells
  const cells: JSX.Element[] = children.map((item: ReactNode, index: number) => {
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
      {cells}
    </View>
  );
};

export default TableRow;
