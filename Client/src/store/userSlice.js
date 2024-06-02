import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
      token: null,
      userInfo: null,
    },
    reducers: {
      setUser: (state, action) => {
        state.token = action.payload.token;
        state.userInfo = action.payload.user;
        localStorage.setItem("token", action.payload.token);
      },
      logoutUser: (state) => {
        state.token = null;
        state.userInfo = null;
        localStorage.removeItem("token");
      },
    },
  });
  
  export const { setUser, logoutUser } = userSlice.actions;
  
  export default userSlice.reducer;