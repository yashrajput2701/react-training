import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Typography,makeStyles,Button} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
name: {
    fontSize: "30px",
    marginLeft: "100px",
    marginTop: "15px"
},
bluename: {
    color: "blue",
    fontSize: "30px",
    marginTop: "15px"
},
icon: {
    marginTop: "28px",
  },
searchicon: {
    marginTop:"18px",
    backgroundColor: "gray",
    borderRadius: "50%",
},
button: {
    borderRadius: "50px",
    width: "100px",
    backgroundColor: "transparent",
    color: "blue",
    border: "2px solid blue",
    height: "50px",
    marginTop: "10px",
    marginLeft: "20px",
},
date: {
    marginLeft: "300px",
    marginRight: "400px",
},
mainwrapper:{
    marginTop: "70px",
},
  
});
export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="center" className={classes.mainwrapper}>
      <Typography variant="h6" className={classes.name}>
            {"Schedule :"}
          </Typography>
          <Typography variant="h6" className={classes.bluename}>
            {"Week"}
          </Typography>
          <ExpandMoreIcon className={classes.icon} />
        <KeyboardDatePicker
          className= {classes.date}
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <SearchIcon className={classes.searchicon} fontSize={"large"} />
        <Button className={classes.button}>Action</Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
