import { TextField } from "@material-ui/core";
import React from "react";

export default function Search({ searchQuery, setSearchQuery }) {
  const handleChange = (e) => {
    const target = e.target.value;
    setSearchQuery(target);
  };

  return (
    <div>
      <h1>Artist Search</h1>
      <TextField
        id="outlined-search"
        label="Search Artists"
        type="search"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}
