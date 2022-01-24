import React from "react";
import { BranchesData } from "../utils/BranchesData";
import BranchCard from "./cards/BranchCard";

function Branches() {
  return (
    <div className="my-6 branches-container">
      {BranchesData.map((branch, index) => {
        return (
          <div
            style={{ height: "100%" }}
            className="slide slide-container my-2"
            key={index}
          >
            <BranchCard data={branch} />
          </div>
        );
      })}
    </div>
  );
}

export default Branches;
