import "katex/dist/katex.min.css";
import { CommentType } from "../../../api/api";

interface CommentProps {
  commentData: CommentType;
}

export default function Comment({ commentData }: CommentProps) {
  const { author, created_at } = commentData;
  return (
    <div>
      <h2>{author}</h2>
      <p>{created_at?.toString()}</p>
    </div>
  );
}
