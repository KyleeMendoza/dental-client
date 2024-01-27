import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ServiceDropDown() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={serviceData}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputLabelProps={{
            style: { fontFamily: "Poppins, sans serif" },
          }}
          label="Choose a service*"
        />
      )}
    />
  );
}

const serviceData = [
  { label: "Pasta Filling" },
  { label: "Teeth Cleaning" },
  { label: "Tooth Extraction" },
];
