import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar  " style={{ backgroundColor: "none" }}>
          <div class="container-fluid">
            <form
              class="d-flex navbar-form"
              style={{
                backgroundColor: "#151517",
                border: "2px solid #222224",
                borderRadius: "10px",
                paddingLeft: "5px",
              }}
            >
              <SearchIcon
                style={{ color: "white", marginTop: "8px", fontSize: "30px" }}
              />
              <input
                class="form-control "
                type="search"
                placeholder="Search product "
                aria-label="Search"
                style={{ background: "none", border: "none" }}
              />
            </form>
            <NotificationAddIcon />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
