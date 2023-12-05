import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
function Visitors() {
  return (
    <>
      {" "}
      <h4>
        <GroupsIcon /> Total Visitors
      </h4>
      <div className="card p-3" style={{ backgroundColor: "#1f1f1f" }}>
        <h2>481,219</h2>
        <h6>
          <span class="material-icons-outlined" style={{ color: "#1ed7b7" }}>
            trending_up
          </span>{" "}
          26.5% + 288.281 today
        </h6>
      </div>
    </>
  );
}

export default Visitors;
