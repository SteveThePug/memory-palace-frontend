import { UserType } from "../../../api/api";
import "katex/dist/katex.min.css";

interface UserProps {
  userData: UserType;
}

export default function User({ userData }: UserProps) {
  const { username, created_at } = userData;
  return (
    <div>
      <h2>{username}</h2>
      {created_at && <p>Created At: {new Date(created_at).toLocaleString()}</p>}
    </div>
  );
}
