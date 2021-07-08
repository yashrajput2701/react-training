import { makeStyles } from "@material-ui/core";
import React from "react";
import { Left } from "./Left";


const styles = makeStyles({
  MainBoxContainer: {
    position: "absolute",
    top: "200px",
    left: "5%",
    zIndex: "2",
    width: "90%",
    display: "flex",
  },
  left: {
    width: "10%",
  },
});

export const Mainbox = () => {
  const classes = styles();
  return (
    <div className={classes.MainBoxContainer}>
      <div className={classes.left}>
        <Left />
      </div>
    </div>
  );
};