import { useEffect } from "react";
import Post from "./Post/Post";
import { postsGet } from "../../store/slices/posts.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export default function Posts() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(postsGet());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>POSTS</h1>
        {posts.map((postData, index) => (
          <Post
            postData={postData}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
