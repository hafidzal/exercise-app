import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <div className="title-bar-style">
                <a className="navbar-brand" href={`/`}>Exerciso.</a>
                <p>Your daily exercise recorder.</p>
            </div>

            <div className="collapse navbar-collapse" className="navbar-list-style">
                <ul className="navbar-nav ml-md-auto ml-lg-auto">
                    {/* <li className="nav-item active">
                    <a className="nav-link" href={`/`}>Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href={`/edit/2`}>Timeline</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`/create`}>Create Exercise</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href={`/user`}>Create User</a>
                    </li>
                    <li>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text logo-search-style">
                                    <SearchIcon className="share-icon"/>
                                </span>
                            </div>
                            <input type="text" 
                                    className="form-control searchbox-style" 
                                    placeholder="Search something..." />
                        </div>
                    </li>
                </ul>
        </div>
        </nav>
    )
  }
}