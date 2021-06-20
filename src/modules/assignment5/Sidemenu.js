import React from 'react'
import {  withStyles } from "@material-ui/core";
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
 import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
 import DevicesSharpIcon from '@material-ui/icons/DevicesSharp';
 import DirectionsBoatSharpIcon from '@material-ui/icons/DirectionsBoatSharp';
 import DomainSharpIcon from '@material-ui/icons/DomainSharp';
 import DraftsSharpIcon from '@material-ui/icons/DraftsSharp';
// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        left: '0px',
        width: '80px',
        height: '100%',
        backgroundColor: '#1565c0',
        position: 'fixed',
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
        <DeleteForeverSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px' , backgroundColor : 'black'}}/>
        <DriveEtaSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px' }}/>
        <DevicesSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}} />
        <DirectionsBoatSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}}/>
        <DomainSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}}/>
        <DraftsSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}}/>
        <DraftsSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}}/>
        <DraftsSharpIcon style={{fontSize: '52px' , color : 'white' , padding :'10px'}}/>
        </div>
    )
}

export default withStyles(style)(SideMenu);
