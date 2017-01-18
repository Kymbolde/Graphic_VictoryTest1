import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
// import logo from './logo.svg';
import './App.css';
// import Live from './Live';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="jumbotron">
          <h1 className="App-intro">
            GRAPHIC
          </h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-2 nav_links">
              <ul>
                <li><IndexLink to="/" activeClassName="active">Live</IndexLink></li>
                <li><Link to="/interactive" activeClassName="active">Interactive</Link></li>
                <li><Link to="/settings" activeClassName="active">Settings</Link></li>
              </ul>
            </div>

            <div className="col-md-10">
              <div className="content"></div>
              {/* <Nav /> */}
              {/* <Live /> */}
              {this.props.children}
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
