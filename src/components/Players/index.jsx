import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import '../Players/players.css';

function Players(params) {
  const [get, setGet] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        console.log(res);
        setGet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="bg-image">
      <img src="images/logo.png"  className="img-fluid" alt="..."></img>
      <div className="submitUser">
      <input style={{borderRadius: "7px",width:"17rem", height:"2.5rem"}} type="text"  name="usuario"></input>
      <input style={{borderRadius: "7px",width:"7rem", height:"2.5rem"}} type="submit" value="Agregar"></input>
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
          {get.map((get) => {
            return (
              <tr>
                <th scope="row">{+1}</th>
                <td>{get.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="nextWindow">
      <Router>
        <Link to="/about">
          <button>Empezar FolioGames</button>
        </Link>
    </Router>
      </div>
    </div>
  );
}

export default Players;
