import React, { useContext } from "react";
import { useStore } from "./store";
import Mainscreendata from "./Mainscreendata";
import { Box, makeStyles,Typography,Grid,Card, CardContent, Button } from "@material-ui/core";
const useStyles = makeStyles({
    container: {
      height: "1000px",
      width: "100%",
    },
    card: {
        height: "300px",
        margin: "50px",
    },
    text: {
        fontSize: "50px",
    },
    button: {
        display: "flex",
        justifyContent: "center"
    }
  
  });
export const Mainscreen = (props) => {
    const {themeState, dispatch} = useStore();
    console.log(themeState);
    
      const classes=useStyles()
return (
    <div>
        <h1 style={themeState?.theme}>Mainscreen</h1>
        <Button className={classes.button} onClick={() => dispatch({type: "UPDATE_TO_LIGHT", payload: "2px solid black"})}>Change to Light</Button>
        <Button className={classes.button} onClick={() => dispatch({type: "UPDATE_TO_DARK", payload: "2px solid white"})}>Change to Dark</Button>
        <Grid className={classes.container} container spacing={6}>
      
      {Mainscreendata?.map((current,index)=>(
          <Grid key={index} item lg={4} xs={12}>
              <Card className={classes.card} style={{ backgroundColor: current.color }}>
                  <Box className={classes.bgcolor}
                  />
                  <CardContent>
                      <Typography variant="h4"
                      align="center"
                      className={classes.text}>
                          {current.name}
                      </Typography>
                      <Typography variant="h5" align="center">
                          {current.year}

                      </Typography>
                  </CardContent>
              </Card>
          </Grid>
      ))}
   
  </Grid>
    </div>
);

};