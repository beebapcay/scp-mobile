import React, { FC } from 'react';
import SmallBtn from '../../../common/ui/base/button/SmallBtn';
import SmallText from '../../../common/ui/base/touchableText/smallText';

interface Props {
  onSendPress: () => void;
  onBackPress: () => void;
  title: string;
  backTitle: string;
}

const ButtonContainer: FC<Props> = (props: Props) => (
  <>
    <SmallBtn onBtnPress={() => props.onSendPress()} title={props.title} />
    <SmallText
      onTextPress={() => props.onBackPress()}
      title={props.backTitle}
    />
  </>
);

export default ButtonContainer;
