///import DataFetching from "./DataFetching";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";

function Points(params) {
  const [posts, setPosts] = useState([]);
  let rowCounter = 1;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleDelete = (post) => {
    axios
      .delete(`http://localhost:8000/api/players/${post._id}`)
      .then((res) => {
        setPosts(post.filter((p) => p._id !== post._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate3 = (post) => {
    axios
      .put(`http://localhost:8000/api/players/${post._id}`, {
        points: (post.points += 3),
      })
      .then((res) => {
        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post };
        setPosts(postsClone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate5 = (post) => {
    axios
      .put(`http://localhost:8000/api/players/${post._id}`, {
        points: (post.points += 5),
      })
      .then((res) => {
        const postsClone = [...posts];
        const index = postsClone.indexOf(post);
        postsClone[index] = { ...post };
        setPosts(postsClone);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-image">
      <img src="images/logo.png" className="img-fluid" alt="..."></img>


      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post._id}>
                <th scope="row">{rowCounter++}</th>
                <td>{post.name}</td>
                <td>{post.points}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleUpdate3(post)}
                  >
                    +3
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleUpdate5(post)}
                  >
                    +5
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(post)}
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Points;
