import { useEffect, useState } from "react";
import { UserType } from "../../api/api";
import User from "./User/User";
import { usersGet } from "../../store/slices/users";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export default function Users() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users) as UserType[];
  const [showUsers, setShowUsers] = useState<boolean>(false);

  useEffect(() => {
    dispatch(usersGet());
  }, [dispatch]);

  const toggleShowUsers = () => {
    setShowUsers((prevShowUsers) => !prevShowUsers);
  };

  return (
    <div>
      <div className="flex">
        <h1 className="flex-1">USERS</h1>
        <button onClick={toggleShowUsers}>
          {showUsers ? "Hide Users" : "Show Users"}
        </button>
      </div>
      {showUsers &&
        users.map((userData) => (
          <User userData={userData} key={userData.user_id} />
        ))}
    </div>
  );
}
