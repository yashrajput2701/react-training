import React from "react";
import { AppBar, Toolbar, Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  switches: {
    marginLeft: "70px",
  },
  signUp: {
    margin: "20px",
    backgroundColor: "green",
    color: "white",
  },
  login: {
    margin: "20px",
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item></Grid>
          <Switch
            className={classes.switches}
            checked={state.checkedB}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            paddingleft="50px "
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <Grid item sm></Grid>
          <Grid item>
            <Button
              variant={"contained"}
              startIcon={<PersonAddOutlinedIcon />}
              size="large"
              className={classes.signUp}
            >
              {"Sign Up Free"}
            </Button>
            <Button
              variant={"contained"}
              startIcon={<PersonAddOutlinedIcon />}
              size="large"
              className={classes.login}
            >
              {"Log In"}
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
