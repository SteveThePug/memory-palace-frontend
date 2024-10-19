import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../../api/api";
import { CommentType } from "../../api/api";
import { AppThunk } from "../store";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [] as CommentType[],
  reducers: {
    commentsSet(_state, action: PayloadAction<CommentType[]>) {
      return action.payload;
    },
  },
});

export const { commentsSet } = commentsSlice.actions;

export const commentsGet = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();
    dispatch(commentsSet(data));
  } catch (error) {
    console.error("Error fetching comments:", (error as Error).message);
  }
};

export default commentsSlice.reducer;
