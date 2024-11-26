import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h2>User : {users.length}</h2>
      <div className="text-center py-12">
        {users.map((user) => (
          <h2 key={user._id}>
            Name : {user.name}
            <Link to={`/put/${user._id}`}><button className="mx-4 btn">Update</button></Link>
            <button onClick={() => handleDelete(user._id)} className="btn ml-4">
              Delete
            </button>

          </h2>
        ))}
      </div>
    </div>
  );
};

export default Update;
