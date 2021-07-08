import React, { useState } from "react";
import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { LoginModalComponent } from "./LoginModalComponent";
import Form from "./Form";

const styles = makeStyles((theme) => ({
  addbar: {
    background: `url("https://app.screpy.com/img/dashboard/header-bg.svg") no-repeat center `,
    color: "white",
    height: "150px",
    zIndex: "1",
    width: "100%",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px",
    },
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontWeight: "1000",
    fontSize: "30px",
    letterSpacing: "-1px",
  },
  image: {
    height: "40px",
  },
  icon: {
    margin: "0 15px",
  },
  button: {
    textTransform: "none",
    fontWeight: "1000",
    color: "#fff",
    backgroundColor: "#130444",
    fontSize: "14px",
    margin: "6px 5px",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));

export const Header = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleLoginModal = () => {
    setOpenLogin(!openLogin);
  };
  

  return (
    <>
      <AppBar position="static" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img
              className={classes.image}
              alt="Logo"
              src="https://app.screpy.com/white-logo.svg"
            />
          </div>
          <div className={classes.innerContainer}>
            <NotificationsIcon className={classes.icon} />
            <Form handleModal={handleModal} open={open} />
            <LoginModalComponent
              handleLoginModal={handleLoginModal}
              openLogin={openLogin}
            />
            <Button className={classes.button} onClick={handleLoginModal}>
              {"Login/Signup"}
            </Button>
            <Button onClick={handleModal} className={classes.button}>
              {console.log(open)}
              {"Add Data"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};