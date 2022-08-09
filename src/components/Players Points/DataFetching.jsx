import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
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
  let x = 0;
  return (
    <div className="table table-dark table-striped">
      <tbody>
        {get.map((get) => {
          return (
            <tr>
              <th scope="row">{x + 1}</th>
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
    </div>
  );
}

export default DataFetching;
