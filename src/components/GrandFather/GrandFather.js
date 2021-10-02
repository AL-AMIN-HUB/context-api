import React from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const GrandFather = () => {
  return (
    <div>
      <h1>Grand Father</h1>
      
      <div style={{ display: "flex" }}>
        <Father></Father>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default GrandFather;
