import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";

export default function Search({ searchQuery, setSearchQuery }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const target = e.target.value;
    dispatch(setSearchQuery(target));
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
