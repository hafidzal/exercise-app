import React, { Component } from 'react';
import axios from 'axios';

class FormCreateExercise extends Component {
  constructor(){
    super();
    this.state = {
      username : '',
      description: '',
      duration: 0,
      date: new Date(),
      showAlert: false
    }
  }

  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('state: ', this.state);
    e.preventDefault();
    axios.post('http://localhost:5000/exercises/add', {
        username: this.state.username,
        description: this.state.description,
        duration: parseInt(this.state.duration),
        date: this.state.date
    })
    .then((response) => {
      this.setState({
        showAlert: true
     })
   
     setTimeout(() => {
        this.setState({
          showAlert: false
        })
     }, 2000)
    }, (error) => {
      console.log('error: ', error);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.showAlert ? 
            <div class="alert alert-success success-alert-style" role="alert">
              Successfully add new exercise! Congratulations!
            </div> : ''
        }

        <form onSubmit={this.submitForm}>
          <div className="create-user-style">
            <input  type="text" 
                    name="username"
                    className="shadow-none searchbox-user-style" 
                    value={this.state.username}
                    onChange={this.changeHandler}
                    placeholder="Username"
                    required />
            <input  type="text" 
                    name="description"
                    className="shadow-none searchbox-user-style" 
                    value={this.state.description}
                    onChange={this.changeHandler}
                    placeholder="Description"
                    required />

            <input  type="text" 
                    name="duration"
                    className="shadow-none searchbox-user-style" 
                    value={this.state.duration}
                    onChange={this.changeHandler}
                    placeholder="Duration"
                    required />
            

            <button type="submit"
                    className="button-create-user-style">
                        Submit &#8250;
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormCreateExercise;