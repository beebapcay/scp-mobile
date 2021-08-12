import React, { FC, ReactChild, ReactText } from 'react';
import { View, ViewStyle, FlatList, ActivityIndicator } from 'react-native';
import { Color } from '../../../enum/enum';
import { Row } from '../../../interface/interface';
import TableHeader from './header/TableHeader';
import style from './style'

interface InfiniteTableProps {
  style?: ViewStyle;
  columnRatio: number[];
  headers?: ReactText[];
  children?: ReactChild[];
  onNearEndReached?: () => void;
  isLoadMore?: boolean;
}

const InfiniteTable: FC<InfiniteTableProps> = (props: InfiniteTableProps) => {
  // Props
  const {
    style: tableStyle,
    headers,
    columnRatio,
    children,
    onNearEndReached,
    isLoadMore = false
  } = props;

  // Row
  function renderRow(row: Row<ReactChild>): JSX.Element {
    // Props
    const { item, index } = row;

    // Style
    const rowStyle: object = (index % 2 === 0 ? style.rowEven : style.rowOdd);

    // Element
    return (
      <View style={rowStyle}>
        {item}
      </View>
    );
  }

  // Footer
  const ListFooter = (): JSX.Element | null => {
    return isLoadMore
      ? null
      : (<ActivityIndicator style={style.loading} size='large' color={Color.BLUE} />);
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
        ListFooterComponent={ListFooter}
        showsVerticalScrollIndicator={false}
        onEndReached={onNearEndReached}
        onEndReachedThreshold={0.1} />

    </View>
  );
};

export default InfiniteTable;
