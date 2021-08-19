import React, { FC } from "react";
import { ScreenURL } from "../../../../models/enum";
import NavigationTab, { NavButton } from "../../base/navigation";

interface Props { }

const BottomNavigation: FC<Props> = (props: Props) => {
  return (
    <NavigationTab>
      <NavButton iconName='home' to={ScreenURL.DASHBOARD} />
      <NavButton iconName='account' to={ScreenURL.PROFILE} />
      <NavButton iconName='bell' size={24} to={ScreenURL.NOTIFICATION} />
    </NavigationTab>
  );
}

export default BottomNavigation;