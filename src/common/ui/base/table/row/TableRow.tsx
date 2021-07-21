import React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import style from './style';

interface Props {
  data: ReactNode[];
  columnRatio: number[];
}

const TableRow = (props: Props): JSX.Element => {
  // Props
  const { data, columnRatio } = props;

  // Header columns
  const cells: JSX.Element[] | undefined = data?.map((item: ReactNode, index: number) => {
    // Style
    const headerStyle = StyleSheet.create({
      textCell: {
        flex: columnRatio[index],
        padding: 8,
        textAlign: 'center',
      }
    });

    // Component
    return (
      <View style={headerStyle.textCell} key={index}>
        {item}
      </View>
    );
  })

  // Component
  return (
    <View style={style.container}>
      {cells}
    </View>
  );
}

export default TableRow;
