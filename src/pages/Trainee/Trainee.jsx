import React from 'react';
import TraineeList from './TraineeList';
import Trainees from './data/trainee';
import TraineeDetail from './TraineeDetails';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';




export default function FormDialog() {

  return (
  
    <Router>
        <TraineeList  data={Trainees} />
      <Switch>
        <Route path="/trainee/:id">
          <TraineeDetail />
        </Route>
      </Switch>
        
    </Router>
  );
}
