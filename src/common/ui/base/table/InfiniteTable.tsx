import React, { FC, ReactChild } from 'react';
import { View, StyleSheet, ViewStyle, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Row } from '../../../interface/interface';
import TableHeader from './header/TableHeader';
import style from './style'

interface InfiniteTableProps {
  style?: ViewStyle;
  columnRatio?: number[];
  headers?: ReactChild[];
  children?: ReactChild[];
  onNearEndReached?: () => void;
  onRowClick?: (index: number) => void;
}

const InfiniteTable: FC<InfiniteTableProps> = (props: InfiniteTableProps) => {
  // Props
  const { style: tableStyle, headers, columnRatio, children, onNearEndReached, onRowClick } = props;

  // Row
  function renderRow(row: Row<ReactChild>): JSX.Element {
    // Props
    const { item, index } = row;

    // Style
    const rowStyle: object = (index % 2 === 0 ? style.rowEven : style.rowOdd);

    // Event
    function onPress() {
      if (onRowClick !== undefined)
        onRowClick(index);
    }

    // Element
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={rowStyle}>
          {item}
        </View>
      </TouchableWithoutFeedback>
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
        showsVerticalScrollIndicator={false}
        onEndReached={onNearEndReached}
        onEndReachedThreshold={0.1} />

    </View>
  );
};

export default InfiniteTable;
