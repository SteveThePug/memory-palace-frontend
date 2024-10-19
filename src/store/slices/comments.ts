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
    commentsAdd(state, action: PayloadAction<CommentType>) {
      state.push(action.payload);
    },
    commentsRemove(state, action: PayloadAction<number>) {
      return state.filter((comment) => comment.comment_id !== action.payload);
    },
  },
});

export const { commentsSet, commentsAdd, commentsRemove } = commentsSlice.actions;

export const commentsGet = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.fetchComments();
    dispatch(commentsSet(data));
  } catch (error) {
    console.error("Error fetching comments:", (error as Error).message);
  }
};

export const commentsCreate = (comment: CommentType): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.addComment(comment);
    dispatch(commentsAdd(data));
  } catch (error) {
    console.error("Error adding comment:", (error as Error).message);
  }
};

export const commentsDelete = (comment_id: number): AppThunk => async (dispatch) => {
  try {
    await api.deleteComment(comment_id);
    dispatch(commentsRemove(comment_id));
  } catch (error) {
    console.error("Error deleting comment:", (error as Error).message);
  }
};

export default commentsSlice.reducer;
