import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  List,
  ListItem,
  Link,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    height: "100px",
  },

  sectionA: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    left: "400px",
  },

  name: {
    fontWeight: "bold",
    margin: "0 1rem",
    fontSize: "18px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "flex-start",
    height: "64px",
  },

  listItem: {
    margin: "0",
    padding: "0",
  },

  link: {
    color: "#909090",
    fontSize: "18px",
    fontWeight: "500",
  },

  selected: {
    borderBottom: "1px solid #2f73eb",
  },

  sectionB: {
    position: "absolute",
    right: "500px",
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  userName: {
    color: "#909090",
    fontSize: "18px",
    fontWeight: "500",
  },
  blog: {
    color: "black",
    fontSize: "28px",
    fontWeight: "500",
  },
  button: {
    width: "350px",
    height: "50px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    margin: "5px",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.navbarContainer}>
        <Box component="div" className={classes.sectionA}>
          <Link href="#" className={classes.blog} underline="none">
            {"Startblogging.co"}
          </Link>
        </Box>

        <Box component="div" className={classes.sectionB}>
          <List className={classes.listContainer} disablePadding>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Home"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Tools"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Content"}
              </Link>
            </ListItem>
            <Button className={classes.button}>Hire us</Button>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
