import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../Loading-Spinner/Loading-Spinner";
import { useNavigate } from "react-router-dom";

function Podium() {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (post) => {
    axios
      .delete("http://localhost:8000/api/delete")
      .then((res) => {
        navigateToPrincipal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateToPrincipal = () => {
    navigate("/");
  };

  const renderPodium = (
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
  );

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
      {isLoading ? <LoadingSpinner /> : renderPodium}
      <button type="button" className="btn btn-success" onClick={handleDelete}>
        Start a New Game
      </button>
    </div>
  );
}

export default Podium;
