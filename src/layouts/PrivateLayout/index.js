import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    Dialog:{
      margin: '10px'
    },
    title: {
      flexGrow: 1,
    },
  }));
  



const PrivateLayout = ({children, ...rest}) => {

    const classes = useStyles();


    return (
      <div className="page page-dashboard">
        <div className="sidebar">
        <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
           <Button color="inherit" component={Link} to="/" >Add Trainee</Button>
          <Button color="inherit" component={Link} to="/textfielddemo">TextField Demo</Button> 
           <Button color="inherit" component={Link} to="/inputdemo">Input Demo </Button> 
           <Button color="inherit" component={Link} to="/childrendemo">Children Demo</Button> 
          <Button color="inherit" className={classes.menuButton}>Logout </Button> 
        </Toolbar>
      </AppBar>
        </div>
        <div className="main">{children}</div>
      </div>
    )
  }
  


export default PrivateLayout;