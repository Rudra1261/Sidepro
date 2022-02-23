import React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
const SelectComponent = () => {
  return (
    <>
      <Box sx={{ minWidth: 120,maxWidth:150 }}>
        <FormControl>
          <InputLabel id="select" >Daily</InputLabel>
          <Select label="select" sx={{minWidth:150}}>
            <MenuItem>Daily</MenuItem>
            <MenuItem>Weekly</MenuItem>
            <MenuItem>Monthly</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SelectComponent;
