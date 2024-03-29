import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TimePicker({
  label,
  name,
  value,
  handler,
  serviceData,
}) {
  // const serviceData = [
  //   { label: "Pasta Filling" },
  //   { label: "Teeth Cleaning" },
  //   { label: "Tooth Extraction" },
  // ];

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={handler}
        >
          {serviceData &&
            serviceData.map((item, index) => (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
