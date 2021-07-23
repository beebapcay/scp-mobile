import React, { FC } from "react";
import { View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import styles from "../style";
import { default_avatar } from "../../../common/util/constants";
import { CButtonCircle } from "../../../common/ui/base";

interface Props {
  value: string | null;
  isEdit: boolean;
  onChangeAvatar: (avatar: string) => void;
}

const AvatarContainer: FC<Props> = (props: Props) => {
  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      props.onChangeAvatar(result.uri);
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <View>
        {props.value === null ? (
          <Image
            source={{ uri: default_avatar }}
            resizeMode="cover"
            style={styles.avatar}
          />
        ) : (
          <Image
            source={{ uri: props.value }}
            resizeMode="cover"
            style={styles.avatar}
          />
        )}
      </View>
      <View style={styles.editAvatarBtn}>
        <CButtonCircle disabled={!props.isEdit} onPress={pickImage}>
          <Feather name="edit-3" size={24} color="white" />
        </CButtonCircle>
      </View>
    </View>
  );
};

export default AvatarContainer;
