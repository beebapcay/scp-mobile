import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserFormInput, UserProfile } from '../../models';
import { Gender, Positions } from '../../models/enum';

const issue_Date = new Date('10/05/2015');

interface MainSliceInitial {
  userInfo: UserProfile;
}

const initialState: MainSliceInitial = {
  userInfo: {
    user_id: 'sjddhkasjdhiouasd',
    first_name: 'Tuan Minh',
    last_name: 'Bui',
    email: 'buituanminh@gmail.com',
    blacklist: false,
    gender: Gender.MALE,
    avatar:
      'https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg',
    card_id: '285974615',
    phone_number: '0123456789',
    // issue_date: issue_Date,
    birthplace: 'TP.Hồ Chí Minh',
    address: 'Bình Thạnh, TP.Hồ Chí Minh',
    hometown: 'Thái Bình',
    positions: Positions.MEMBER,
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<UserFormInput>) => {
      state.userInfo.first_name = action.payload.firstName;
      state.userInfo.last_name = action.payload.lastName;
      state.userInfo.email = action.payload.email;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.userInfo.avatar = action.payload;
    },
    resetUserInfo: (state) => initialState,
  },
});

export const { updateUserInfo, updateAvatar, resetUserInfo } = profileSlice.actions;
