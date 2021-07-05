import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
  root: {
    minWidth: "175px",
    margin: "20px",
    borderRadius: "10px",
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flexstyle:{
    display: "flex",
    justifyContent: "center",
    marginTop:"100px",
    backgroundColor: "black",
    height:"280px",
  },
  heading: {
      fontSize: "24px",
      width: "320px",
      marginBottom: "10px",
  },
  paragraph: {
      fontSize: "16px",
      width: "320px",
  },
  button: {
      backgroundColor:"#4caf50",
  }, 
  button2:{
      border: "2px solid gray"
  }
});

export default function OutlinedCard() {
  const classes = useStyles();


  return (
    <Box className={classes.flexstyle}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      
        <Typography variant="h5" component="h2" className={classes.heading}>
        Want Your Custom Design or Tools?
        </Typography>
       
        <Typography variant="body2" component="p" className={classes.paragraph}>
        Our team is specialised in creating custom designs and custom website applications. If you have any work. We can help you.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}>Hire our team</Button>
      </CardActions>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      
        <Typography variant="h5" component="h2" className={classes.heading}>
        Have any new ideas or suggestions for us?

        </Typography>
      
        <Typography variant="body2" component="p" className={classes.paragraph}>
        Do you want us to create any new tool or if you have any idea to improve our current features. Please let us know.
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button2}>submit feedback</Button>
      </CardActions>
    </Card>
    <Card className={classes.root} variant="outlined">
      <CardContent>
       
        <Typography variant="h5" component="h2" className={classes.heading}>
        Facing any issue or tools not working?
        </Typography>
     
        <Typography variant="body2" component="p" className={classes.paragraph}>
        Are you facing any issues in using any of the tools? Or if any tool is not working, then please tell us.
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button2}>submit feedback</Button>
      </CardActions>
    </Card>
    </Box >
  );
}
