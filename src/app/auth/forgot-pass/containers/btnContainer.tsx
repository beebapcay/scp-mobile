import React from "react";
import SmallBtn from "../../../../common/ui/base/button/SmallBtn";
import SmallText from "../../../../common/ui/base/touchableText/smallText";

interface Props {
  onSendPress: Function;
  onBackPress: Function;
  title: string;
  backTitle: string;
}

const ButtonContainer = (props: Props) => {
  return (
    <>
      <SmallBtn onBtnPress={props.onSendPress} title={props.title} />
      <SmallText onTextPress={props.onBackPress} title={props.backTitle} />
    </>
  );
};

export default ButtonContainer;
