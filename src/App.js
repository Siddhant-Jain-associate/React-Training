import React from 'react';
import Trainee from "./pages/Trainee/Trainee";
import {BrowserRouter as Router,Switch,Route,Link,Match,Redirect} from 'react-router-dom';
import TextFielddemo from './pages/Dayfourorfive'
import ChildrenDemo from './Components/Math';
import AuthLayout from './layouts/AuthLayout';
import PrivateLayout from './layouts/PrivateLayout';
import Login from './pages/Login/Login';
import NotFound from './layouts/NotFoundPage';

export default function ButtonAppBar() {

  return (
    <Router>
      
      <Switch>
       
        <AuthLayout path='/login'><Login /></AuthLayout>
        <PrivateLayout exact path='/'><Trainee /></PrivateLayout> 
        <PrivateLayout path="/inputdemo">Input Demo</PrivateLayout>
        <PrivateLayout path='/textfielddemo'><TextFielddemo /></PrivateLayout>
        <PrivateLayout path='/childrendemo'><ChildrenDemo /></PrivateLayout>
        <PrivateLayout ><NotFound /></PrivateLayout>
      </Switch>
    
    </Router>
  );
}
