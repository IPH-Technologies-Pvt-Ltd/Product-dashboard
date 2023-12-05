import React from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
function Revenue() {
  return (
    <>
      {" "}
      <h4>
        <VolunteerActivismIcon /> Total Revenue
      </h4>
      <div className="card p-3" style={{ backgroundColor: "#1f1f1f" }}>
        <h2>$874,281</h2>
        <h6>
          <span class="material-icons-outlined" style={{ color: "#ec3a02" }}>
            trending_down
          </span>{" "}
          8.56% -$271 today
        </h6>
      </div>
    </>
  );
}

export default Revenue;
