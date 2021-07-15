import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import styles from "../../../common/ui/layout/login-layout/style";
import { Picker } from "@react-native-picker/picker";
import LoginTextContainer from "./containers/loginTextContainer";
import tempTenant from "./tempTenant.json";
import { useTranslation } from "react-i18next";
import { ScreenURL } from "../../../models/enum";
import { loginCheck } from "../../../common/util/common";
import { RouteComponentProps } from "react-router-native";
import LoginLayout from "../../../common/ui/layout/login-layout";
import LargeBtn from "../../../common/ui/base/button/LargeBtn";
import SmallText from "../../../common/ui/base/touchableText/smallText";
import LargeText from "../../../common/ui/base/touchableText/largeText";

interface Props extends RouteComponentProps<any> {}
const Login = (props: Props) => {
  const { t } = useTranslation();
  const [tenant, setTenant] = useState<string>(tempTenant.tenants[0].value);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  const handleUsernameInput = (data: string): void => {
    setUsername(data);
  };

  const handlePasswordInput = (data: string): void => {
    setPassword(data);
  };

  const handleLoginPress = (): void => {
    if (loginCheck(username, password)) {
      //Login Ok
    }
    //AsyncStorage.setItem(ScopeKey.IS_AUTHENTICATED,ScopeValue.TRUE)
    //const next = props.location.search.split("=")
    // if (next.length==2){
    //     console.log(next[1])
    //     props.history.push(`${next[1]}`)
    // }
    // else props.history.push(ScreenURL.HOME)
  };

  const handleRegisterPress = (): void => {
    props.history.push(ScreenURL.REGISTER);
  };

  const handleForgotPress = (): void => {
    props.history.push(ScreenURL.FORGOT_PASSWORD);
  };

  const handleVisiblePress = (): void => {
    setVisible(!visible);
  };

  return (
    <LoginLayout>
      <TouchableHighlight style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={tenant}
          mode="dropdown"
          onValueChange={(itemValue) => {
            setTenant(itemValue);
          }}
        >
          {tempTenant.tenants.map((item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Picker>
      </TouchableHighlight>

      <LoginTextContainer
        onUsernameChange={handleUsernameInput}
        onPasswordChange={handlePasswordInput}
        onVisibleChange={handleVisiblePress}
        visible={visible}
      />

      <LargeBtn onBtnPress={handleLoginPress} title={t("title.login")} />

      <LargeText
        onTextPress={handleRegisterPress}
        title={t("title.register")}
      />
      <SmallText
        onTextPress={handleForgotPress}
        title={t("title.forgotPassword")}
      />
    </LoginLayout>
  );
};

export default Login;
