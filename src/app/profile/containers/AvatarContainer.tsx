import React, { FC } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "../style";
import { UserProfile } from "../../../models";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/rootReducer";
import * as ImagePicker from "expo-image-picker";
import { default_avatar } from "../../../common/util/constants";
import { Feather } from "@expo/vector-icons";
import { updateAvatar } from "../slice";

interface Props {
  isEdit: boolean;
}

const AvatarContainer: FC<Props> = (props: Props) => {
  const userInfo: UserProfile = useSelector(
    (state: RootState) => state.profile.userInfo
  );
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | null>(userInfo.avatar);

  const pickImage = async (): Promise<void> => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch(updateAvatar(result.uri));
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <View>
        {image === null ? (
          <Image
            source={{ uri: default_avatar }}
            resizeMode="cover"
            style={styles.avatar}
          />
        ) : (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={styles.avatar}
          />
        )}
      </View>
      <TouchableOpacity
        disabled={!props.isEdit}
        onPress={pickImage}
        style={
          props.isEdit ? styles.editAvatarBtn : styles.editAvatarBtnDisable
        }
      >
        <Feather name="edit-3" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarContainer;
