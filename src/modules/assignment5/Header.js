import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import Button from "@material-ui/core/Button"
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        } 
    },
    switches:{
        marginLeft:'70px'
    },
    Button:{
        margin: '20px'
    }
}))

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
                <Grid container
                    alignItems="center">
                    <Grid item>
                    </Grid>
                    <Switch
                    className={classes.switches}
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    paddingleft="50px "
                    inputProps={{ 'aria-label': 'primary checkbox' }}/>
                    <Grid item sm></Grid>
                    <Grid item>
                    <Button className={classes.Button}
                    variant="contained" color="primary">
                    SIGN UP FREE
                    </Button>
                    <Button variant="contained" color="secondary">
                    LOGIN
                    </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
