import React from "react";
import { name, city } from "../data/data";

const divStyle = {
  color: "firebrick"
};

const h1Info = `${name} is a Web Developer from ${city} `;

function Home() {
  // update the JSX being returned!
  return (<div id="home">
      <h1 style={divStyle}>{h1Info}</h1>
  </div>
  );
}

export default Home;
