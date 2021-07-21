import React, { FC, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import styles from '../style';
import { UserProfile } from '../../../models';

import { RootState } from '../../../models/rootReducer';
import { default_avatar } from '../../../common/util/constants';
import { updateAvatar } from '../slice';
import { CButtonCircle } from '../../../common/ui/base';

interface Props {
  isEdit: boolean;
}

const AvatarContainer: FC<Props> = (props: Props) => {
  const userInfo: UserProfile = useSelector(
    (state: RootState) => state.profile.userInfo,
  );
  const dispatch = useDispatch();
  const [image, setImage] = useState<string | null>(userInfo.avatar);

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
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
      <CButtonCircle disabled={!props.isEdit} onPress={pickImage}>
        <Feather name="edit-3" size={24} color="white" />
      </CButtonCircle>
    </View>
  );
};

export default AvatarContainer;
