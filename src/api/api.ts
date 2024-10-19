import axios from "axios";

const baseURL = "http://localhost:8080";

const API = axios.create({ baseURL });

// Add authorization token to header
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
  }
  return req;
});

// Type declarations
export interface PostType {
  post_id?: number;
  user_id?: number;
  title: string;
  markdown: string;
  author?: string;
  created_at?: Date;
  updated_at?: Date;
  comments?: CommentType[];
}

export interface UserType {
  user_id: number;
  username: string;
  created_at: Date;
}

export interface CommentType {
  comment_id?: number;
  post_id: number;
  user_id?: number;
  author?: string;
  content: string;
  created_at?: Date;
}

export interface CredentialType {
  username: string;
  password: string;
  email?: string;
}

export interface TokenType {
  user: UserType;
  token: string;
}

// Post APIs
export const fetchPosts = () => API.get("/posts");
export const fetchPost = (post_id: number) => API.get(`/post/${post_id}`);
export const createPost = (post: PostType) => API.post("/post", post);
export const deletePost = (post_id: number) => API.delete(`/post/${post_id}`);
export const updatePost = (post_id: number, post: PostType) =>
  API.patch(`/post/${post_id}`, post);

// Comment APIs
export const fetchComments = () => API.get(`/comments`);
export const addComment = (comment: CommentType) =>
  API.post(`/comment`, comment);
export const deleteComment = (comment_id: number) =>
  API.delete(`/comment/${comment_id}`);
export const updateComment = (comment_id: number, comment: CommentType) =>
  API.patch(`/comment/${comment_id}`, comment);

// User APIs
export const fetchUsers = () => API.get("/users");
export const fetchUser = (username: string) => API.get(`/user/${username}`);
export const signIn = (creds: CredentialType) =>
  API.post("/user/signin", creds);
export const signUp = (creds: CredentialType) =>
  API.post("/user/signup", creds);
export const deleteUser = () => API.delete("/user");
