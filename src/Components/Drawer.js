import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Hidden from "@mui/material/Hidden";
import MailIcon from "@mui/icons-material/Mail";
import ChatIcon from "@mui/icons-material/Chat";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Dashboard from "@mui/icons-material/Dashboard";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LanguageIcon from "@mui/icons-material/Language";

function Drawers() {
  const icons = [
    <Dashboard />,
    <MailIcon />,
    <ChatIcon />,
    <AssessmentIcon />,
    <StarIcon />,
  ];
  const icons1 = [<SettingsIcon />, <HelpIcon />];

  return (
    <>
      <h1 style={{ paddingLeft: "13px", marginTop: "20px" }}>
        <LanguageIcon
          style={{
            fontSize: "50px",
            color: "#6729da",
            marginTop: "-5px",
            marginRight: "5px",
          }}
        />
        Swift
      </h1>
      <List style={{ marginTop: "20px", marginLeft: "20px" }}>
        {["Dashboard", "Chat", "Orders", "Analytics", "Reviews"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              style={{ margin: "6px 0px 6px 0px" }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "white" }}>
                  {icons[index]}
                </ListItemIcon>
                <Hidden smDown>
                  <ListItemText primary={text} />
                </Hidden>
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List style={{ marginLeft: "20px" }}>
        {["Settings", "Help Center"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            style={{ margin: "6px 0px 6px 0px" }}
          >
            <ListItemButton>
              <ListItemIcon style={{ color: "white" }}>
                {icons1[index]}
              </ListItemIcon>
              <Hidden smDown>
                <ListItemText primary={text} />
              </Hidden>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Drawers;
