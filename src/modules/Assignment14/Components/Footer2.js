import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const useStyles = makeStyles({
 flexstyle:{
     backgroundColor: "gray",
     display: "flex",
     justifyContent: "space-around",
 },
 blog:{
fontSize:"25px",
marginBottom: "10px",
marginTop:"10px",
 }
});

export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <Box className={classes.flexstyle}>
    <Typography variant="h3" className={classes.blog}>
    © StartBlogging.co 2021
    </Typography>
    <ChatBubbleOutlineIcon
            fontSize={"large"}
            style={{ color: "white", backgroundColor: "blue", borderRadius: "50%" }}
          />
    </Box >
  );
}
