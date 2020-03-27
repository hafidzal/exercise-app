import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import ExercisesList from './components/exercisesList';
// import EditExercises from './components/editExercises';
import Home from './container/home';
import Edit from './container/edit';
import createExercise from './container/createExercise';
import createUser from './container/createUser';

function App() {
  return (
    <div className="App">
      <Router>
         <Route path="/" exact component={Home} />
         <Route path="/edit/:id" component={Edit} />
         <Route path="/create" component={createExercise} />         
         <Route path="/user" component={createUser} />
      </Router>
    </div>
  );
}

export default App;
