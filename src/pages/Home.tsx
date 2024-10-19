import Posts from "../components/Posts/Posts.tsx";
import Users from "../components/Users/Users.tsx";
import Comments from "../components/Comments/Comments.tsx";

export default function Home() {
  return (
    <div>
      <Posts />
      <Users />
    </div>
  );
}
