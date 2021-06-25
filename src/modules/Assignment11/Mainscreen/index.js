import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles,Typography,Grid,Card, CardContent } from "@material-ui/core";

import { getMain } from "./actions";
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

});

function Mainscreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mainData } = useSelector((state) => state.mainReducer);

  useEffect(() => {
    dispatch(getMain());
  }, []);

  return (
    <Grid className={classes.container} container spacing={6}>
      
        {mainData?.map((current,index)=>(
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
  );
}
export default Mainscreen;
