import React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import style from './style';

interface Props {
  headers?: ReactNode[];
  columnRatio: number[];
}

const TableHeader = (props: Props): JSX.Element => {
  // Props
  const { headers, columnRatio } = props;

  // Header columns
  const headerColumns: JSX.Element[] | undefined = headers?.map((item: ReactNode, index: number) => {
    // Style
    const headerStyle = StyleSheet.create({
      textCell: {
        flex: columnRatio[index],
        padding: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
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
      {headerColumns}
    </View>
  );
}

export default TableHeader;
