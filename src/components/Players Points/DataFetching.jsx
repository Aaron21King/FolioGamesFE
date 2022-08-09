import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="data">
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.name} {post.points}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
