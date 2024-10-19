import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as api from "../../api/api";
import { CredentialType, TokenType } from "../../api/api";

const userSlice = createSlice({
  name: "user",
  initialState: null as TokenType | null,
  reducers: {
    userSet(_state, action: PayloadAction<TokenType>) {
      return action.payload;
    },
    userDelete(_state, _action) {
      return null;
    },
  },
});

export const { userSet, userDelete } = userSlice.actions;

export const userSignIn =
  (creds: CredentialType): AppThunk => async (dispatch) => {
    try {
      const { data } = await api.signIn(creds);
      localStorage.setItem("token", JSON.stringify(data));
      dispatch(userSet(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const userSignUp =
  (creds: CredentialType): AppThunk => async (dispatch) => {
    try {
      const { data } = await api.signUp(creds);
      localStorage.setItem("token", JSON.stringify(data));
      dispatch(userSet(data));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

export const userLogOut = (): AppThunk => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(userDelete({}));
};

export default userSlice.reducer;
