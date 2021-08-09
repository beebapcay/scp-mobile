import React, { FC, ReactChild } from 'react';
import { View, ViewStyle, FlatList } from 'react-native';
import { Row } from '../../../interface/interface';
import TableHeader from './header/TableHeader';
import style from './style'

interface PagingTableProps {
  style?: ViewStyle;
  columnRatio?: number[];
  headers?: ReactChild[];
  children?: ReactChild[];
}

const PagingTable: FC<PagingTableProps> = (props: PagingTableProps) => {
  // Props
  const { style: tableStyle, headers, columnRatio, children } = props;

  // Row
  function renderRow(row: Row<ReactChild>): JSX.Element {
    // Props
    const { item, index } = row;

    // Style
    const rowStyle: object = (index % 2 === 0 ? style.rowEven : style.rowOdd);

    // Element
    return (
      <View style={rowStyle} key={index}>
        {item}
      </View>
    );
  }

  // Component
  return (
    <View style={tableStyle}>
      {headers === undefined
        ? undefined
        : (
          <TableHeader columnRatio={columnRatio}>
            {headers}
          </TableHeader>
        )
      }

      <FlatList
        style={style.flatlist}
        data={children}
        renderItem={renderRow}
        showsVerticalScrollIndicator={false}/>
    </View>
  );
};

export default PagingTable;
