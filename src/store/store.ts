import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./slices/posts.ts";
import tokenReducer from "./slices/token.ts";
import usersReducer from "./slices/users.ts";
import commentsReducer from "./slices/comments.ts";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    token: tokenReducer,
  },
});

import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
