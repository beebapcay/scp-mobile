import React, { FC, ReactElement, useState } from "react";
import { View } from 'react-native'
import { NavButtonProps } from "./button";
import style from './style';
import NavButton from './button'

interface Props {
  children?: ReactElement<NavButtonProps>[];
  initialIndex?: number;
}

const NavigationTab: FC<Props> = (props: Props) => {
  // Props
  const { children, initialIndex = 0 } = props
  const [selectedIndex, setSelectedIndex] = useState<number>(initialIndex)

  // Events
  function onChildPressed(child: ReactElement<NavButtonProps>, index: number): void {
    if (child.props.onPressed !== undefined)
      child.props.onPressed();
    setSelectedIndex(index);
  }

  // Component
  return (
    <View style={style.container}>
      {children?.map((child: ReactElement<NavButtonProps>, index: number) => {
        const newChild = { ...child };
        newChild.props = {
          ...child.props,
          iconColor: index === selectedIndex ? 'white' : '#FFFFFF77',
          onPressed: () => onChildPressed(child, index)
        }
        return newChild;
      })}
    </View>
  );
}

export default NavigationTab;
export {
  NavButton
}
