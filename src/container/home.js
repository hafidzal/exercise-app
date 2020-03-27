import React, { Component } from 'react';
import Navbar from '../components/navbar';
import UserList from '../components/userList';

class Home extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <UserList />
            </div>
        );
    }
}

export default Home;