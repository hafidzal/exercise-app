import React, { Component } from 'react';
import Navbar from '../components/navbar';
import FormCreateExercise from '../components/formCreateExercise';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <FormCreateExercise />
            </div>
        );
    }
}

export default Home;