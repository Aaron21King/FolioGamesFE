import React from "react";

function Podium() {
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
          <h1>Noe</h1>
        </div>
        <div className="first">
          <img src="images/gold.png" alt="" className="img-medals-first" />
          <h1>Javier</h1>
        </div>
        <div className="third">
          <img src="images/bronze.png" alt="" className="img-medals" />
          <h1>Aaron</h1>
        </div>
      </section>
    </div>
  );
}

export default Podium;
