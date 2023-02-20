import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { SortBy } from "./FilterBy";
export default function SelectSmall({ products, setProducts }) {
  const [value, setValue] = React.useState("");
  const sort = SortBy(products, setProducts);
  const handleChange = (event) => {
    setValue(event.target.value);
    sort(event.target.value);
    console.log(products);
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
            <MenuItem value={0}>Price</MenuItem>
            <MenuItem value={1}>Category</MenuItem>
            <MenuItem value={2}>Rating</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
