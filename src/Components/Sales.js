import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
function Sales() {
  return (
    <>
      <h4>
        <AccountBalanceIcon /> Total Sales
      </h4>
      <div className="card p-3" style={{ backgroundColor: "#1f1f1f" }}>
        <h2>$213,482</h2>
        <h6>
          <span class="material-icons-outlined" style={{ color: "#1ed7b7" }}>
            trending_up
          </span>{" "}
          13,45% +1,248 today
        </h6>
      </div>
    </>
  );
}

export default Sales;
