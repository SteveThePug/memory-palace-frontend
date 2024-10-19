import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../../api/api";
import { CommentType, PostType } from "../../api/api";
import { AppThunk } from "../store"; // Assuming you have a store.ts file with AppThunk defined

const postsSlice = createSlice({
  name: "posts",
  initialState: [] as PostType[],
  reducers: {
    postsUnshift(state, action: PayloadAction<PostType>) {
      state.unshift(action.payload);
    },
    postsRemove(state, action: PayloadAction<number>) {
      return state.filter((post) => post.post_id !== action.payload);
    },
    postsSet(_state, action: PayloadAction<PostType[]>) {
      return action.payload;
    },
    postsUnshiftComment(state, action: PayloadAction<CommentType>) {
      const comment = action.payload;
      const post = state.find((post) => post.post_id === comment.post_id);
      if (post && post.comments) {
        post.comments.unshift(comment);
      }
    },
  },
});

export const { postsUnshift, postsRemove, postsSet, postsUnshiftComment } =
  postsSlice.actions;

export const postsGet = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(postsSet(data));
  } catch (error) {
    console.error("Error fetching posts:", (error as Error).message);
  }
};

export const postsCreate = (post: PostType): AppThunk => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(postsUnshift(data));
  } catch (error) {
    console.error("Error creating post:", (error as Error).message);
  }
};

export const postsDelete = (post_id: number): AppThunk => async (dispatch) => {
  try {
    await api.deletePost(post_id);
    dispatch(postsRemove(post_id));
  } catch (error) {
    console.error("Error deleting post:", (error as Error).message);
  }
};

export const addComment =
  (comment: CommentType): AppThunk => async (dispatch) => {
    try {
      const { data } = await api.addComment(comment);
      dispatch(postsUnshiftComment(data));
    } catch (error) {
      console.error("Error adding comment:", (error as Error).message);
    }
  };

export default postsSlice.reducer;
