import { TextField } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import '../../App.css'
import { makeStyles } from "@material-ui/core/styles";

export default function Search({ searchQuery, setSearchQuery }) {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const target = e.target.value;
    dispatch(setSearchQuery(target));
  };

  const useStyles = makeStyles((theme) => ({
    searchField: {
      width: "30%",
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
      },
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },

    },

  }));
  const classes = useStyles();

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
