import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://spoxtale-task.vercel.app")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("ERROR: ", err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Spoxtale Task</h1>
      <div className="card_main">
        {users.map((user) => (
          <UserCard key={user.emailID} data={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
