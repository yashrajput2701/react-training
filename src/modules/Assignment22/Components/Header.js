import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  List,
  ListItem,
  Link,
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    height: "60px",
    backgroundColor: "#2c302d",
  },

  sectionA: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    left: "60px",
  },

  name: {
    fontWeight: "bold",
    margin: "0 1rem",
    fontSize: "18px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "flex-start",
    height: "60px",
    color: "white",
 
  },

  listItem: {
    padding: "0",
    color: "white",
    margin: "25px",
    width: "110px"
  },

  link: {
    color: "white",
    fontSize: "15px",
    fontWeight: "500",
  },

  selected: {
    borderBottom: "1px solid #2f73eb",
  },

  sectionB: {
    position: "absolute",
    right: "300px",
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
    color: "white",
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
  logo: {
      color: "white",
  },
  logo2: {
    color: "white",
    marginTop: "20px"
}
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.navbarContainer}>
      <MenuIcon className={classes.logo}/>
        <Box component="div" className={classes.sectionA}>
          <Link href="#" className={classes.blog} underline="none">
            {"THRILLER"}
          </Link>
        </Box>

        <Box component="div" className={classes.sectionB}>
          <List className={classes.listContainer} disablePadding>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"HOME"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"ABOUT"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"CONTACT"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"BLOG"}
              </Link>
            </ListItem>
            <SettingsIcon className={classes.logo2}/>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
