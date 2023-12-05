import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
function Orders() {
  return (
    <>
      {" "}
      <h4>
        <BusinessCenterIcon /> Total Orders
      </h4>
      <div className="card p-3" style={{ backgroundColor: "#1f1f1f" }}>
        <h2>$28,218</h2>
        <h6>
          <span class="material-icons-outlined" style={{ color: "#ec3a02" }}>
            trending_down
          </span>
          4.4% -812 today
        </h6>
      </div>
    </>
  );
}

export default Orders;
