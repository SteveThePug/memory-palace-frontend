import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../store";
import * as api from "../../api/api";
import { UserType } from "../../api/api";

const usersSlice = createSlice({
  name: "users",
  initialState: [] as UserType[],
  reducers: {
    usersSet(_state, action) {
      return action.payload;
    },
  },
});

export const { usersSet } = usersSlice.actions;

export const usersGet = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch(usersSet(data));
  } catch (error) {
    console.error("Error fetching users:", (error as Error).message);
  }
};

export default usersSlice.reducer;
