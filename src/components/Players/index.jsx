import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import '../Players/players.css';

function Players(params) {
  const[namePlayer]=React.useState({
    name:''
  });
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

      
  },[]);
  const addPost =  () =>{
    const postName = {name:namePlayer, points:0};
     axios.post("http://localhost:8000/api/players",postName).then((res)=>{console.log(res)}).catch((err)=>{
      setPosts([postName, ...posts]);
     })
  };
  
  return (
    <div className="bg-image">
      <img src="images/logo.png"  className="img-fluid" alt="..."></img>
      <div className="submitUser">
      <input style={{borderRadius: "7px",width:"17rem", height:"2.5rem"}}  type="text"  name="usuario"></input>
      <input style={{borderRadius: "7px",width:"7rem", height:"2.5rem"}} type="submit" value="Agregar" ></input>
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
          {posts.map((post) => {
            return (
              <tr>
                <th scope="row">{+1}</th>
                <td>{post.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
      type="button"
      className="btn btn-success">
				<Link style={{color:"white",textDecorationLine:"none"}} to='/points'>Let the Games Begin!!⚾⚾</Link>
		</button>
     
    </div>
  );
}

export default Players;
