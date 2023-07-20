import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem("userInfo")) ?? null,
  updateSuccess: false,
  entries: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.error = null;
      state.loading = false;
    },
    userLogout: (state) => {
      state.loading = false;
      state.error = null;
      state.userInfo = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    updateUserProfile: (state, { payload }) => {
      state.error = null;
      state.userInfo = payload;
      state.updateSuccess = true;
      state.loading = false;
    },
    resetUpdate: (state) => {
      state.updateSuccess = false;
    },
    setUserEntries: (state, { payload }) => {
      state.error = null;
      state.entries = payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  userLogin,
  userLogout,
  setError,
  resetUpdate,
  setUserEntries,
  updateUserProfile,
} = userSlice.actions;

export default userSlice.reducer;

export const userSelector = (state) => state.user;
//SetUserEntries can be used to set userInfo for testing purposes and after DB persists
