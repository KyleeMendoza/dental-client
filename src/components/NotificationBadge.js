import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function NotificationBadge({ notifData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    // <IconButton aria-label="cart">
    //   <StyledBadge badgeContent={notifData && notifData.length} color="primary">
    //     <NotificationsIcon style={{ fontSize: "2rem", color: "black" }} />
    //   </StyledBadge>
    // </IconButton>
    <div>
      {/* <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      Dashboard
    </Button> */}
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <StyledBadge
          badgeContent={notifData && notifData.length}
          color="primary"
        >
          <NotificationsIcon style={{ fontSize: "2rem", color: "black" }} />
        </StyledBadge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          maxHeight: "25rem",
          marginTop: "2rem",
          maxWidth: "30rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {notifData &&
          notifData.map((item, index) => (
            <MenuItem onClick={handleClose} key={index}>
              {item.approval === "accepted" ? (
                <div className="flex gap-4 font-['Poppins'] w-full">
                  <div className="text-base flex flex-col justify-start items-start font-semibold  w-full">
                    <p>
                      Booking was{" "}
                      <span className="text-green-600">Accepted</span>!
                    </p>
                    {item.additional_services.length === 0 ? (
                      <p className="text-xs text-gray-500 font-light w-full">
                        Your booking for {item.service} is accepted <br /> and
                        is scheduled for {item.appointment_start}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500 font-light w-full">
                        Your booking for {item.service} and{" "}
                        {item.additional_services[0].service_description} is
                        accepted <br /> and is scheduled for{" "}
                        {item.appointment_start}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 font-['Poppins'] w-full">
                  <div className="text-base flex flex-col justify-start items-start font-semibold  w-full">
                    <p>
                      Booking was <span className="text-red-600">Rejected</span>
                      !
                    </p>
                    {item.additional_services.length === 0 ? (
                      <p className="text-xs text-gray-500 font-light w-full">
                        Your booking for {item.service} is rejected <br /> which
                        is scheduled for {item.appointment_start}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-500 font-light w-full">
                        Your booking for {item.service} and{" "}
                        {item.additional_services[0].service_description} is
                        rejected <br /> which is scheduled for{" "}
                        {item.appointment_start}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
}
