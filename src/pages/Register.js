import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import auth from "../services/auth.service";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Dental Appointment
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register({ setDisplay }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const phone = data.get("phone");
    const name = data.get("name");
    const address = data.get("address");
    const password = data.get("password");

    // Check if any required field is empty
    if (!email || !phone || !name || !address || !password) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const result = await auth.register(email, phone, name, address, password);

      if (result) {
        setDisplay("login");
        toast.success("Successfully registered.");
      }
    } catch (error) {
      toast.error("Fill all required inputs.");
      console.log("Error logging in:", error.message);
    }
  };

  return (
    <>
      <div className="w-[25rem] bg-white p-7 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              fontSize: "2rem",
            }}
          >
            Dental Register
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              fontSize: "1rem",
            }}
          >
            Create and account!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            // sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              name="phone"
              label="Phone"
              type="phone"
              id="phone"
              autoComplete="phone-number"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography
                  sx={{ fontSize: 16, fontFamily: "Poppins, sans serif" }}
                >
                  Remember Me
                </Typography>
              }
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* <Grid container>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ fontFamily: "Poppins, sans serif" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </div>
    </>
  );
}
