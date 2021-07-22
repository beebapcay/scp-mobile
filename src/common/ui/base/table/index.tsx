import React, { FC, ReactElement, ReactChild } from 'react';

import { View, StyleSheet } from 'react-native';
import { Color } from '../../../enum/enum';
import TableHeader, { TableHeaderProps } from './header/TableHeader';

type Child = ReactElement<TableHeaderProps>;
type Children = Child[];

interface TableProps {
  width?: number;
  columnRatio?: number[];
  headers?: ReactChild[];
  children: Children;
}

const Table: FC<TableProps> = (props: TableProps) => {
  // Props
  const {
    width, headers, columnRatio, children,
  } = props;

  // Style
  const tableStyle = (width !== undefined)
    ? StyleSheet.create({ container: { width } })
    : StyleSheet.create({ container: {} });

  // Component
  return (
    <View style={tableStyle.container}>

      {headers !== undefined
        && (
        <TableHeader columnRatio={columnRatio}>
          {headers}
        </TableHeader>
        )}

      {children.map((item: Child, index: number) => {
        const rowStyle = StyleSheet.create({
          container: {
            backgroundColor: index % 2 === 0 ? Color.WHITE : Color.LIGHT_GRAY,
          },
        });

        return (
          <View style={rowStyle.container} key={index}>
            {item}
          </View>
        );
      })}

    </View>
  );
};
export default Table;
