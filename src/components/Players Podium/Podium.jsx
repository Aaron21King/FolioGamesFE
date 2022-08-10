import React from "react";

function Podium() {
  return (
    <div className="podium">
      <img
        src="images/congratulations2.png"
        className="img-fluid2"
        alt="..."
      ></img>
      <div className="podium">
        <img src="images/medals.png" alt="" className="img-medals" />
        <div className="podium-names">
          <span className="first">Noe</span>
          <span className="second">Aaron</span>
          <span className="third">Javier</span>
        </div>
      </div>
    </div>
  );
}

export default Podium;
