import "katex/dist/katex.min.css";
import { CommentType } from "../../../api/api";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { deleteComment } from "../../../store/slices/posts";

interface CommentProps {
  commentData: CommentType;
}

export default function Comment(props: CommentProps) {
  const { commentData } = props;
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: any) => state.token);
  const { author, content, created_at, post_id, comment_id, user_id } = commentData;

  const handleDeleteComment = async () => {
    dispatch(deleteComment(post_id, comment_id!));
  };

  return (
    <div className="comment flex justify-between items-center">
      <div>
        <h3>{author}</h3>
        <p>{content}</p>
        <p>{created_at?.toString()}</p>
      </div>
      <>
        {token?.user.user_id === user_id && (
          <button 
            onClick={handleDeleteComment} 
            className="text-red-500 hover:text-red-700"
          >
            delete
          </button>
        )}
      </>
    </div>
  );
}