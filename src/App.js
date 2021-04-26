import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Trainee from "./pages/Trainee/Trainee";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from './pages/Login/Login';
import TextFielddemo from './pages/Dayfourorfive'
import ChildrenDemo from './Components/Math';
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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
           <Button color="inherit" component={Link} to="/" >Add Trainee</Button>
          <Button color="inherit" component={Link} to="/textfielddemo">TextField Demo</Button> 
           <Button color="inherit" component={Link} to="/inputdemo">Input Demo </Button> 
           <Button color="inherit" component={Link} to="/childrendemo">Children Demo</Button> 
          <Button color="inherit" component={Link} to="/login" className={classes.menuButton}>Logout </Button> 
        </Toolbar>
      </AppBar>
      <Switch>
              <Route exact path='/' component={Trainee} />
              <Route path='/login' component={Login} />
              <Route path='/textfielddemo' component={TextFielddemo} />
              <Route path="/childrendemo" component={ChildrenDemo} />
      </Switch>
    
    </Router>
  );
}
