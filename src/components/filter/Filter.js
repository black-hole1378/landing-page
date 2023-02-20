import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

export default function SelectSmall({ products, setProducts }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(products);
    setProducts(products.sort());
  };

  return (
    <Box display={"flex"} justifyContent="flex-end" sx={{ mb: 1 }}>
      <Box display={"flex"} alignItems="center">
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small">Sort by</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={value}
            label="filter"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Price</MenuItem>
            <MenuItem value={20}>Category</MenuItem>
            <MenuItem value={30}>Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
