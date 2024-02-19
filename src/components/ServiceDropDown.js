import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ServiceDropDown({
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
          dis
        >
          {serviceData &&
            serviceData.map((item, index) => (
              <MenuItem value={item.service_name} key={index}>
                {item.service_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
