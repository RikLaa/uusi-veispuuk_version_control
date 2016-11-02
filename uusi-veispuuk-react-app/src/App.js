import React, { Component } from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './scene/Home/Home.jsx';
import Login from './scene/Login/Login.jsx';

var App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <Home />
        
     </div>
    );
  }
});


export default App;
