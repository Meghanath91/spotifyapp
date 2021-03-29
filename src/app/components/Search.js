import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";

export default function Search({ searchQuery, setSearchQuery }) {
  const dispatch = useDispatch();


  const useStyles = makeStyles((theme) => ({
    searchField: {
      width: "30%",
      [theme.breakpoints.down('sm')]: {
        width: "90%"
      },
      "& input:valid + fieldset": {
        borderColor: "yellowgreen",
        borderWidth: 2,
      },
      "& label.Mui-focused": {
        color: "yellowgreen",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "yellowgreen",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red",
        },
        "&:hover fieldset": {
          borderColor: "yellowgreen",
        },
        "&.Mui-focused fieldset": {
          borderColor: "yellowgreen",
        },
      },
    },
  }));

  const classes = useStyles();



  const handleChange = (e) => {
    const target = e.target.value;
    dispatch(setSearchQuery(target));
  };

  return (
    <div className="search-container">
      <TextField
        className={classes.searchField}
        id="outlined-search"
        label="Search for an artist..."
        type="search"
        variant="outlined"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}
