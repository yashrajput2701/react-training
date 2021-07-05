import React from "react";
import Header from "../Assignment14/Components/Header";
import Footer from "../Assignment14/Components/Footer";
import Footer2 from "../Assignment14/Components/Footer2";
import {Left} from "../Assignment14/Components/Left";
import {Right} from "../Assignment14/Components/Right";
import { makeStyles } from "@material-ui/core";
function Assignment14() {
    const styles = makeStyles({
        mainContainer: {
          display: "flex",
          marginTop:"100px",
          justifyContent: "center",
        },
      });
      const classes = styles();
  return <>
  <Header/>
  <div className={classes.mainContainer}>
<Left />
<Right />
</div>
  <Footer/>
  <Footer2/>
  </>
}
export default Assignment14;