import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color } from '../../../enum/enum';
import style from './style';

interface Props {
  maxItemPerPage: number;
  totalItem: number;
  onPageChanged?: (index: number) => void;
}

const PageSelection = (props: Props) => {
  // Props
  const { maxItemPerPage, totalItem, onPageChanged } = props;
  const [index, setIndex] = useState<number>(0);
  const pageCount = Math.ceil(totalItem / maxItemPerPage);

  // Events
  const onIndexChanged = (index: number): void => {
    setIndex(index);
    if (onPageChanged !== undefined)
      onPageChanged(index);
  }
  const onLeftArrowPressed = (): void => {
    if (index > 0)
      onIndexChanged(index - 1);
  }
  const onRightArrowPressed = (): void => {
    if (index < pageCount - 1)
      onIndexChanged(index + 1);
  }

  // Generate list of pages
  const pages = [];
  const lower = Math.max(0, index - 2);
  const upper = Math.min(index + 2, pageCount - 1);
  for (let pageIndex = lower; pageIndex <= upper; pageIndex++) {
    // Style
    const internalStyle = StyleSheet.create({
      page: {
        margin: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 100,
        borderColor: Color.BLUE,
        backgroundColor: index == pageIndex ? Color.BLUE : 'white',
        borderWidth: 2
      },
      text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: index == pageIndex ? 'white' : Color.BLUE
      }
    });

    // Add pages
    const pagePos = pageIndex + 1;
    pages.push(
      <TouchableOpacity
        style={internalStyle.page}
        onPress={() => onIndexChanged(pageIndex)}
        key={pageIndex}
      >
        <Text style={internalStyle.text}>
          {pagePos}
        </Text>
      </TouchableOpacity>
    );
  }

  // Component
  return (
    <View style={style.container}>

      <TouchableOpacity style={style.arrowNavigation}
        onPress={onLeftArrowPressed}>
        <Text style={style.arrowText}>
          {'<'}
        </Text>
      </TouchableOpacity>

      {pages}

      <TouchableOpacity style={style.arrowNavigation}
        onPress={onRightArrowPressed}>
        <Text style={style.arrowText}>
          {'>'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default PageSelection;
