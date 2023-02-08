import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const User = {
  name: "",
  email: "",
};

const initialState = {
  user: null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.user = action.payload;
    },
    updateEmail(state, action) {
      state.user.email = action.payload;
    },
    updateName(state, action) {
      state.user.name = action.payload;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.profile,
        };
      },
    },
  },
});

export const { setProfile, updateEmail, updateName } = ProfileSlice.actions;
export const selectUser = (state) => state.profile.User;
