import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "bootstrap/dist/css/bootstrap.min.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  console.log(friends);
  return (
    <div className="container">
      <div className="row mt-5">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
