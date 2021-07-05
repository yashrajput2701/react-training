import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
  grid: {
      marginLeft: '400px',
     
  }
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid className={classes.grid} item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid  item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>+</Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}