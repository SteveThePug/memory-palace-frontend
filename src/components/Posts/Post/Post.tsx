import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import { CommentType, PostType } from "../../../api/api";
import { addComment, postsDelete } from "../../../store/slices/posts";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

interface PostProps {
  postData: PostType;
}

export default function Post({ postData }: PostProps) {
  const dispatch = useAppDispatch();
  const { post_id, user_id, title, markdown, author, comments } = postData;
  const token = useAppSelector((state: any) => state.token);
  const [isCommenting, setIsCommenting] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");

  const handleCommentSubmit = async () => {
    const commentData: CommentType = {
      content: comment,
      post_id: post_id!,
    };
    dispatch(addComment(commentData));
    setIsCommenting(false); // Hide the comment input after submitting
  };

  const handleDeletePost = async (post_id: number) => {
    dispatch(postsDelete(post_id));
  };

  return (
    <div>
      <div className="flex space-between">
        <h2 className="flex-1 text-left">{title}</h2>
        {token?.user.user_id === user_id && (
          <button onClick={() => handleDeletePost(post_id!)}>delete</button>
        )}
        <h2 className="flex-1 text-right">{author}</h2>
      </div>
      <div className="overflow-y-scroll">
        <ReactMarkdown
          className="p-2"
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </div>

      <div>
        {comments?.map((comment, index) => (
          <div key={index}>
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      {token?.user && !isCommenting && (
        <button onClick={() => setIsCommenting(true)}>Add Comment</button>
      )}

      {isCommenting && (
        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Write your comment..."
          />
          <button
            onClick={handleCommentSubmit}
            className="mt-2 bg-blue-500 text-white p-2"
          >
            Submit Comment
          </button>
          <button
            onClick={() => setIsCommenting(false)}
            className="ml-2 bg-red-500 text-white p-2"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
