import React from 'react';
import Trainee from "./pages/Trainee/Trainee";
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import TextFielddemo from './pages/Dayfourorfive'
import ChildrenDemo from './Components/Math';
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';
import Login from './pages/Login/Login';
import NotFound from './layouts/NotFoundPage';
import TraineeDetail from './pages/Trainee/TraineeDetails';


export default function ButtonAppBar() {

  return (
    <Router>
      
      <Switch>
      <Route exact path="/">
            <Redirect to="/login" />
      </Route>
       
        <AuthLayout path='/login'><Login /></AuthLayout>
        <PrivateLayout exact path='/trainee'><Trainee /></PrivateLayout> 
        <PrivateLayout path="/trainee/:id"><TraineeDetail /></PrivateLayout>
        <PrivateLayout path="/inputdemo">Input Demo</PrivateLayout>
        <PrivateLayout path='/textfielddemo'><TextFielddemo /></PrivateLayout>
        <PrivateLayout path='/childrendemo'><ChildrenDemo /></PrivateLayout>
        <PrivateLayout ><NotFound /></PrivateLayout>
      </Switch>
    
    </Router>
  );
}
