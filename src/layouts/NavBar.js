import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Cookies from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HistoryIcon from "@mui/icons-material/History";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import LoginModal from "./LoginModal";

const pages = ["Home", "About", "Services", "Contact"];
const pagesLink = ["/", "/About", "/Services", "/Contact"];
const settings = ["Profile", "Logout"];

function NavBar({ open, handleOpen, handleClose }) {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token
  const [anchorSettings, setAnchorSettings] = React.useState(null);

  //Settings
  const handleOpenUserMenu = (event) => {
    setAnchorSettings(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorSettings(null);
  };

  const handleLogout = () => {
    Cookies.set("token", "", { expires: new Date(0) });
    navigate("/");
    toast.success("Successfully logged out.");
  };
  //   E7238B

  return (
    <div className="h-screen flex flex-col">
      <div
        className="navbar-container py-2 flex justify-center items-center z-10"
        style={{ boxShadow: "0px 2px 15px -5px rgba(0,0,0,0.75)" }}
      >
        <div className="w-[95%] font-['Poppins'] text-white ">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "black",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                // mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Dental
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // border: "2px solid red",
                gap: "35px",
                margin: "0 50px",
              }}
            >
              {pages.map((page, index) => (
                <div key={index} className="text-xl flex">
                  <Box
                    sx={{
                      flexGrow: 0,
                      cursor: "pointer",
                      borderRadius: "5px",
                      backgroundColor:
                        index !== 0
                          ? window.location.pathname.substring(1) === page
                            ? "#06b6d4"
                            : ""
                          : window.location.pathname === "/"
                          ? "#06b6d4"
                          : "",
                    }}
                  >
                    <NavLink to={pagesLink[index]}>
                      <div className="flex justify-center items-center gap-1 px-2 py-1 text-xl rounded-lg transition ease-in-out">
                        <p
                          className={`${
                            index !== 0
                              ? window.location.pathname.substring(1) === page
                                ? "white font-bold"
                                : "text-gray-500"
                              : window.location.pathname === "/"
                              ? "white font-bold"
                              : "text-gray-500"
                          }`}
                        >
                          {page}
                        </p>
                      </div>
                    </NavLink>
                  </Box>
                </div>
              ))}
            </Box>
            <div className="flex gap-5">
              <div className="bg-[#E7238B] flex justify-center items-center px-4 py-2 rounded-full cursor-pointer">
                <p>Book Appointment</p>
              </div>
              {token ? (
                <>
                  <Tooltip>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <AccountCircleIcon
                        style={{ fontSize: "2rem", color: "black" }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorSettings}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorSettings)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting, index) => (
                      <MenuItem onClick={handleCloseUserMenu} key={index}>
                        {setting === "Profile" ? (
                          <div
                            className="flex gap-2"
                            onClick={() => navigate("/Profile")}
                          >
                            <AccountCircleIcon />
                            {setting}
                          </div>
                        ) : (
                          <div
                            className="flex gap-2"
                            onClick={() => handleLogout()}
                          >
                            <LogoutIcon />
                            {setting}
                          </div>
                        )}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <LoginModal
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                />
              )}
            </div>
          </Toolbar>
        </div>
      </div>
      <div className="outlet-container flex-1">
        <Outlet />
      </div>
    </div>
  );
}
export default NavBar;
