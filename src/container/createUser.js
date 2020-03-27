import React, { Component } from 'react';
import Navbar from '../components/navbar';
import FormCreateUser from '../components/formCreateUser';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <FormCreateUser />
            </div>
        );
    }
}

export default Home;