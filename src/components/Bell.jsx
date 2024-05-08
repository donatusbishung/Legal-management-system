import * as React from "react";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export default function SimpleBadge() {
  return (
    <Badge
      className="font-[300]"
      badgeContent={4}
      color="primary text-[#fff] p-0 bg-[red] font-[300]"
      style={{
        color: "white", // Color of the number
        backgroundColor: "transparent", // Background color of the badge
        borderRadius: "10%", // Make badge a circle
        fontWeight: "100 "
        // Adjust padding as needed
      }}
    >
      <NotificationsOutlinedIcon style={{ color: "white" }} />
    </Badge>
  );
}
