import React, { Component } from 'react';
import Navbar from '../components/navbar';
import ExercisesList from '../components/exercisesList';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <ExercisesList />
            </div>
        );
    }
}

export default Home;