import React, { useState, useEffect } from "react";
import axios from "axios";

function Podium() {
  const [posts, setPosts] = useState([]);

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
  }, []);

  posts.sort((a, b) => {
    return b.points - a.points;
  });

  return (
    <div className="podium">
      <img
        src="images/congratulations2.png"
        className="img-fluid2"
        alt="..."
      ></img>
      <section className="podium-medals">
        <div className="second">
          <img src="images/silver.png" alt="" className="img-medals" />
          <div>
            {posts.slice(1, 2).map((post, index) => {
              return (
                <div key={index}>
                  <h1>{post.name}</h1>
                  <h1>{post.points}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="first">
          <img src="images/gold.png" alt="" className="img-medals-first" />
          <div>
            {posts.slice(0, 1).map((post, index) => {
              return (
                <div key={index}>
                  <h1>{post.name}</h1>
                  <h1>{post.points}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="third">
          <img src="images/bronze.png" alt="" className="img-medals" />
          <div>
            {posts.slice(2, 3).map((post, index) => {
              return (
                <div key={index}>
                  <h1>{post.name}</h1>
                  <h1>{post.points}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Podium;
