import React, { Component } from 'react';
import axios from 'axios';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

class UserList extends Component {
    constructor(){
        super();

        this.state = {
            user:[],
            username:''
        }
    }

    componentDidMount(){
        axios
            .get(`http://localhost:5000/users`)
            .then(response => {
                // console.log('response: ', response.data);
                if(response.data.length > 0){
                    this.setState({
                        user: response.data.map(user=> user.username),
                    })
                }
            })
            .catch(e => {
                console.log('error when fetching data: ', e);
            });
    }   


    renderList = () => {
        return (
            <>
                <ul>
                    {this.state.user.map( (user,index) =>
                        <li key={user} className="user-list-style">
                            <PersonOutlineIcon className="username-icon-style"/>
                            <p className="username-style">{user}</p>
                            <p className="caption-user-style">
                                Hi, {user} here is your exercise recaps this week
                            </p>
                            <button className="button-details-style">
                                Detials &#8250;
                            </button>
                        </li>
                    )}
                </ul>
            </>
        ) 
    }

    render(){
        console.log('state: ', this.state);
        return(
            <>
                {this.renderList()}
            </>
        );
    }
}

export default UserList;