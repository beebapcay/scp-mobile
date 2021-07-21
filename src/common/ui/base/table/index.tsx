import React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Color } from '../../../enum/enum';
import TableHeader from './header/TableHeader';
import TableRow from './row/TableRow';

interface Props {
  columnRatio: number[];
  headers?: ReactNode[];
  data: ReactNode[][];
}

const Table = (props: Props) => {
  // Props
  const { headers, columnRatio, data } = props;

  // Rows
  const rows = data.map((row: ReactNode[], index: number): JSX.Element => {
    // Style
    const style = StyleSheet.create({
      rowContainer: {
        backgroundColor: index % 2 === 0 ? 'white' : Color.LIGHT_GRAY
      },
    });

    // Component
    return (
      <View style={style.rowContainer} key={index}>
        <TableRow columnRatio={columnRatio} data={row}/>
      </View>
    );
  });

  // Component
  return (
    <>
      <TableHeader headers={headers} columnRatio={columnRatio} />
      {rows}
    </>
  );
}

export default Table
