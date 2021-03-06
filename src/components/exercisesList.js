import React, { Component } from 'react';
import axios from 'axios';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import moment from 'moment';

class ExercisesList extends Component {
    constructor(){
        super();

        this.state = {
            user:[]
        }
    }

    componentDidMount(){
        axios
            .get(`http://localhost:5000/exercises`)
            .then(response => {
                // console.log('response: ', response.data);
                if(response.data.length > 0){
                    this.setState({
                        user: response.data.map(user=> 
                          user),
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
                        <li key={index} className="user-list-style">
                            <PersonOutlineIcon className="username-icon-style"/>
                            <p className="username-style">{user.username}</p>
                            <p className="caption-user-style">
                                {user.description} | {user.duration} minutes
                            </p>
                            <button className="button-date-style">
                                {moment(user.date).format('LLL')}
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

export default ExercisesList;