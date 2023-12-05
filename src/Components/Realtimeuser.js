import React from "react";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";

function Realtimeuser() {
  return (
    <>
      <div className="col-12 d-flex justify-content-between">
        <h6 style={{ marginLeft: "-15px", marginTop: "7px" }}>Realtime User</h6>
        <button
          style={{
            backgroundColor: "#3f3e42",
            border: "none",
            borderRadius: "5px",
            color: "#dedee0",
            fontSize: "14px",
          }}
        >
          View All
        </button>
      </div>
      <h5>8,129</h5>
      <p>User</p>
      <Divider />
      <div className="d-flex justify-content-between mt-2">
        <h5>Top Active Product</h5>
        <h5>Active User</h5>
      </div>
      <div style={{ flex: 1, alignItems: "center" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src="src/Components/download.jpeg"
              alt="Product Image"
              style={{ width: "50px", height: "60px", borderRadius: 4 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Knit Polo Shirt"
            // secondary="swift.com/knitpoloshirt"
            secondaryTypographyProps={{ style: { color: "#777777" } }}
          />
          <button className="btn1">4291</button>
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar
              src="/static/images/avatar/1.jpg"
              alt="Product Image"
              style={{ width: "50px", height: "60px", borderRadius: 4 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Turtle Neck Oversize"
            // secondary="swift.com/turtleneckoversize"
            secondaryTypographyProps={{ style: { color: "#777777" } }}
          />
          <button className="btn1">901</button>
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar
              src="/static/images/avatar/1.jpg"
              alt="Product Image"
              style={{ width: "50px", height: "60px", borderRadius: 4 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Turtle Neck Oversize"
            // secondary="swift.com/turtleneckoversize"
            secondaryTypographyProps={{ style: { color: "#777777" } }}
          />
          <button className="btn1">217</button>
        </ListItem>
      </div>
    </>
  );
}

export default Realtimeuser;
