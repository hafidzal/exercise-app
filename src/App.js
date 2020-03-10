import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ExercisesList from './components/exercisesList';
import EditExercises from './components/editExercises';

function App() {
  return (
    <div className="App">
      <Router>
         <Route path="/" exact component={ExercisesList} />
         <Route path="/edit" component={EditExercises} />         
      </Router>
    </div>
  );
}

export default App;
