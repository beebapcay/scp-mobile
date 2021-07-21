import { combineReducers } from "@reduxjs/toolkit";
import { profileSlice } from "../app/profile/slice";

export const rootReducer = combineReducers({
  profile: profileSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
