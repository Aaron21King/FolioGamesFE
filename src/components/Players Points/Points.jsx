///import DataFetching from "./DataFetching";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Points(params) {
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
          {get.map((get) => {
            return (
              <tr>
                <th scope="row">{ + 1}</th>
                <td>{get.name}</td>
                <td>{get.points}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    +3
                  </button>
                  <button type="button" className="btn btn-primary">
                    +5
                  </button>
                </td>
              </tr>
            );
          })}
          {/* <tr>
          <th scope="row">1 </th>
          <td>{name}</td>
          <td>{points}</td>
          <td>
            <button type="button" className="btn btn-primary">
              +3
            </button>
            <button type="button" className="btn btn-primary">
              +5
            </button>
          </td>
        </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Points;
