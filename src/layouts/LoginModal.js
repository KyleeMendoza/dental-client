import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Login from "../pages/Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function LoginModal({ open, handleOpen, handleClose }) {
  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "#06b6d4" }}
        onClick={handleOpen}
      >
        Sign In
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login />
        </Box>
      </Modal>
    </div>
  );
}
