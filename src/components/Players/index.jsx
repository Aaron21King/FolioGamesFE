import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../Players/players.css";

function Players(params) {
  let rowCounter = 1;
  const [namePlayer, setNamePlayer] = React.useState("");
  const [players, setPlayers] = useState([]);

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

  const addPost = (e) => {
    e.preventDefault();
    setPlayers([...players, namePlayer]);
    setNamePlayer("");
  };

  const handleChange = (e) => {
    setNamePlayer(e.target.value);
  };

  const sendData = () => {
    axios
      .post("http://localhost:8000/api/players", players)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setPosts([...posts]);
      });
  };

  return (
    <div className="bg-image">
      <img src="images/logo.png" className="img-fluid" alt="..."></img>
      <div className="submitUser">
        <input
          style={{ borderRadius: "7px", width: "17rem", height: "2.5rem" }}
          placeholder="Player Name"
          type="text"
          name="usuario"
          onChange={handleChange}
          value={namePlayer}
        ></input>
        <input
          style={{ borderRadius: "7px", width: "7rem", height: "2.5rem" }}
          type="submit"
          value="Agregar"
          onClick={addPost}
        ></input>
      </div>
      <hr></hr>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {players.map((post) => {
            return (
              <tr>
                <th scope="row">{rowCounter++}</th>
                <td>{post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={sendData} type="button" className="btn btn-success">
        <Link
          style={{ color: "white", textDecorationLine: "none" }}
          to="/points"
        >
          Let the Games Begin!!⚾⚾
        </Link>
      </button>
    </div>
  );
}

export default Players;
