import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  List,
  ListItem,
  Link,
  Button
} from "@material-ui/core";
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
    height: "80px",
    backgroundColor: "white",
  },

  sectionA: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    left: "300px",
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
    margin: "2px",
    width: "160px"
  },

  link: {
    color: "black",
    fontSize: "15px",
    fontWeight: "500",
  },

  selected: {
    borderBottom: "1px solid #2f73eb",
  },

  sectionB: {
    position: "absolute",
    right: "600px",
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
    color: "blue",
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
      color: "blue",
      marginLeft:"250px",
  },
  button: {
    color: "blue",
    marginTop: "10px",
    backgroundColor: "transparent",
    border: "2px solid blue",
    borderRadius: "40px",
    width: "100px",
    height: "40px",
    marginLeft: "300px",
}
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.navbarContainer}>
      <SettingsEthernetIcon className={classes.logo}/>
        <Box component="div" className={classes.sectionA}>
          <Link href="#" className={classes.blog} underline="none">
            {"My Signature "}
          </Link>
        </Box>

        <Box component="div" className={classes.sectionB}>
          <List className={classes.listContainer} disablePadding>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Features"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Blog"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Pricing"}
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link href="#" className={classes.link} underline="none">
                {"Signature Templates"}
              </Link>
            </ListItem>
            <Button className={classes.button} >
                Sign up
            </Button>
            
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
