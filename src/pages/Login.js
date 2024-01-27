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

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");

    // console.log(username);
    // console.log(password);

    if (username === "admin" && password === "admin") {
      Cookies.set("token", "admin", { expires: 1 });
      toast.success("Successfully logged in.");
      navigate(window.location.pathname);
    } else {
      // alert("Invalid Credentials");
      toast.error("Invalid Credentials.");
    }
  };

  return (
    <>
      <div className="w-[25rem] bg-white p-7 rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <Box
          sx={{
            marginTop: 8,
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
            Dental Login
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
            Welcome!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              inputProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              InputLabelProps={{ style: { fontFamily: "Poppins, sans serif" } }}
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography
                  sx={{ fontSize: 16, fontFamily: "Poppins, sans serif" }}
                >
                  Remember Me
                </Typography>
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ fontFamily: "Poppins, sans serif" }}
                >
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ fontFamily: "Poppins, sans serif" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
