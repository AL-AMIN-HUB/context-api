import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = () => {
  return (
    <div>
      <h1>Father</h1>
      
      <div style={{ display: "flex" }}>
        <Brother ></Brother>
        <MySelf ></MySelf>
        <Sister ></Sister>
      </div>
    </div>
  );
};

export default Father;
