import { Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles((theme) =>({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display:"initial",
    },
  },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#177fe4",
    color: "#fff",
    fontSize: "16px",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#2a2a2a",
    },
  },
}));

export const CodeGenerator = (props) => {
    const classes = styles();
    const { products } = useSelector((state) => state.productReducer);
    var finalString = "";
  
    products.map((product, index) => {
      const codeString = `
  <html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>

<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

</body>
</html>`;
finalString += codeString;
});
  return (
    <div className={classes.mainContainer}>
    <Paper elevation={3} className={classes.paper}>
      <SyntaxHighlighter language="jsx" style={dracula}>
        {finalString}
      </SyntaxHighlighter>
      <Button
        className={classes.button}
        onClick={() => {
          props.handleModal();
        }}
      >
        {"Close"}
      </Button>
    </Paper>
  </div>
);
        };