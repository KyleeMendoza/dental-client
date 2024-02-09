import * as React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

export default function PriceCard({ service, handleOpen, handleClose }) {
  const navigate = useNavigate();
  const token = Cookies.get("token"); //user token

  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: "lg",
        width: 400,
        maxWidth: "100%",
        overflow: "auto",
        resize: "horizontal",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        // border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip size="sm" variant="soft">
          {service.estimated_time} Hour
        </Chip>
        <Chip size="sm" variant="soft">
          Painless
        </Chip>
      </Box>
      <div>
        <Typography level="h2">
          ₱{service.service_cost}
          <Typography fontSize="sm" textColor="white">
            /session
          </Typography>
        </Typography>
      </div>
      <CardContent>
        <Typography level="title-lg"> {service.service}</Typography>
        <Typography level="body-md">{service.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="solid"
          onClick={() => {
            if (token) {
              navigate("/Appointment");
            } else {
              handleOpen();
              handleClose();
            }
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
