import React, { FC, ReactChild } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import style from './style';

export interface TableRowProps {
  children: ReactChild[];
  columnRatio: number[];
  onPress?: () => void;
}

const TableRow: FC<TableRowProps> = (props: TableRowProps) => {
  // Props
  const { children, columnRatio, onPress } = props;

  // Cells
  const cells: ReactChild[] = children.map((item: ReactChild, index: number) => {
    // Style
    const rowStyle = StyleSheet.create({
      cell: {
        flex: columnRatio[index],
        paddingVertical: 10,
      },
    });

    // Component
    return (
      <View style={rowStyle.cell} key={index}>
        {(typeof item === 'string' || typeof item === 'number')
          ? <Text style={style.text}>{item}</Text>
          : { item }}
      </View>
    );
  });

  // Component
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        {cells}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TableRow;
