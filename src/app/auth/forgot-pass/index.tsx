import React, { useState } from "react";
import { Text } from "react-native";
import styles from "../../../common/ui/layout/card-view-layout/style";
import { Entypo } from "react-native-vector-icons";
import { useTranslation } from "react-i18next";
import EmailTextInput from "../../../common/ui/base/textInput/emailTextInput";
import { email_reg } from "../../../common/util/constants";
import ButtonContainer from "./containers/btnContainer";
import ResetComplete from "../../../common/ui/layout/card-view-layout/resetComplete";
import { RouteComponentProps } from "react-router-native";
import CardViewLayout from "../../../common/ui/layout/card-view-layout";

interface Props extends RouteComponentProps<any> {}
const ForgotPassword = (props: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [complete, setComplete] = useState<boolean>(false);

  const handleEmailChange = (data: string): void => {
    setEmail(data);
  };

  const handleSendPress = (): void => {
    if (email.match(email_reg)) {
      setComplete(true);
    }
  };

  const handleBackPress = (): void => {
    setComplete(false);
    setEmail("");
    props.history.goBack();
  };

  const completeChange = (): JSX.Element => {
    if (complete === false) {
      return (
        <>
          <Entypo name="mail" size={100} color="#00C2FF" style={styles.image} />
          <Text style={styles.des}>{t("forgot.description1")}</Text>
          <Text style={styles.des}>{t("forgot.description2")}</Text>
          <Text style={styles.des}>{t("forgot.description3")}</Text>
          <EmailTextInput
            placeholder={t("title.email")}
            icon="email"
            onTextChange={handleEmailChange}
            secure={false}
          />
          <ButtonContainer
            onSendPress={handleSendPress}
            onBackPress={handleBackPress}
            title={t("title.send")}
            backTitle={t("title.backToLogin")}
          />
        </>
      );
    } else {
      return (
        <ResetComplete
          completeText={t("title.sentReset")}
          backText={t("title.backToLogin")}
          onBackPress={handleBackPress}
        />
      );
    }
  };

  return <CardViewLayout>{completeChange()}</CardViewLayout>;
};

export default ForgotPassword;
