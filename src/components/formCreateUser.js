import React, { Component } from 'react';
import axios from 'axios';

class FormCreateUser extends Component {
  constructor(){
    super();
    this.state = {
      name : '',
      showAlert: false
    }
  }

  changeHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users/add', {
      username: this.state.name
    })
    .then((response) => {
      this.setState({
        showAlert: true,
        name: ''
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
              Successfully add new user! Congratulations!
            </div> : ''
        }

        <form onSubmit={this.submitForm}>
          <div className="create-user-style">
            <input  type="text" 
                    // name="name"
                    className="shadow-none searchbox-user-style" 
                    value={this.state.name}
                    onChange={this.changeHandler}
                    placeholder="Input your name.."
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

export default FormCreateUser;