import { useEffect, useState } from "react";
import Comment from "./Comment/Comment.js";
import { commentsGet } from "../../store/slices/comments";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export default function Comments() {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    dispatch(commentsGet());
  }, [dispatch]);

  const toggleShowComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  return (
    <div>
      <div className="flex">
        <h1 className="flex-1">COMMENTS</h1>
        <button onClick={toggleShowComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      {showComments &&
        comments.map((commentData, index) => (
          <Comment commentData={commentData} key={index} />
        ))}
    </div>
  );
}
