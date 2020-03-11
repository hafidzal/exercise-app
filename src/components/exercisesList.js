import React, { Component } from 'react';

export default class ExercisesList extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Exercise App
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/edit">Edit</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}