import { TextField } from "@material-ui/core";
import React from "react";

export default function Search() {

  return (
    <div>
      <h1>Artist Search</h1>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        variant="outlined"
      />
    </div>
  );
}
