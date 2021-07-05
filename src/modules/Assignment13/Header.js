import React from "react";

import {
  AppBar,
  makeStyles,
  Toolbar,
  Box,
  List,
  ListItem,
  Link,
  Avatar,
  Typography,
} from "@material-ui/core";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DomainSharpIcon from '@material-ui/icons/DomainSharp';
const useStyles = makeStyles({
  navbarContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },

  sectionA: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    backgroundColor: " rgb(47, 115, 235)",
    color: "#fff",
    position: "absolute",
    width: "3.8rem",
    height: "70%",
    padding: "0.6rem 0",
    left: "0",
  },

  image: {
    marginLeft: "4rem",
  },

  name: {
    fontWeight: "bold",
    margin: "0 1rem",
    fontSize: "18px",
  },

  icon: {
    margin: "0 1.2rem",
  },

  verticalLine: {
    width: "1px",
    height: "40px",
    backgroundColor: "	#C8C8C8",
  },

  listContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "3rem",
    height: "64px",
  },

  listItem: {
    margin: "0 1.5rem",
  },

  link: {
    color: "#909090",
    fontSize: "18px",
    fontWeight: "500",
  },

  selected: {
    borderBottom: "3px solid #2f73eb",
  },

  sectionB: {
    position: "absolute",
    right: "90px",
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
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="white">
      <Toolbar className={classes.navbarContainer}>
        <Box component="div" className={classes.sectionA}>
          <DomainSharpIcon fontSize={"large"} className={classes.logo} />
          <Avatar
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2Fbetter%2Flifestyle%2Fhow-tap-health-benefits-coffee-ncna1096031&psig=AOvVaw11NiAuxBQWegXn-G4LMmM3&ust=1625213395893000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJC3mOu1wfECFQAAAAAdAAAAABAD"
            alt="Coffee"
            className={classes.image}
          />
          <Typography variant="h6" className={classes.name}>
            {"Cafe Lovers"}
          </Typography>
          <ExpandMoreIcon className={classes.icon} />
          <Box component="div" className={classes.verticalLine} />
        </Box>

        <List className={classes.listContainer} disablePadding>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Dashboard"}
            </Link>
          </ListItem>
          <ListItem className={`${classes.listItem} ${classes.selected}`}>
            <Link
              href="#"
              className={classes.link}
              style={{ color: "#2f73eb" }}
              underline="none"
            >
              {"Schedule"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Messenger"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Reports"}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link href="#" className={classes.link} underline="none">
              {"Staff"}
            </Link>
          </ListItem>
        </List>

        <Box component="div" className={classes.sectionB}>
          <NotificationsActiveIcon
            fontSize={"large"}
            style={{ color: "	#909090 " }}
          />
          <Avatar
            src="https://material-ui.com/static/images/avatar/3.jpg"
            alt="Users"
          />
          <Typography variant="h6" className={classes.userName}>
            {"Anton"}
          </Typography>
          <ExpandMoreIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}