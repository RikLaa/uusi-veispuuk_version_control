// Reactin kirjastot
import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

// Sovelluksen komponentit
import Home from './scene/Home/Home.jsx';
import Login from './scene/Login/Login.jsx';
import Registeration from './scene/Registeration/Registeration.jsx'
import Profile from './scene//Profile/Profile.jsx';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Tähän App-komponenttiin voi aluksi tuoda muita komponentteja joita haluaa renderöitävän
// Container-fluid määritys mahdollistaa esim navbarille toimimisen koko sivun leveydelle.
// Muut komponentit voidaan sitoa "container" luokan sisälle. Mutta tehdään se itse komponentin omassa tiedostossa, 
// ei tässä
/*var App = React.createClass({
  render: function () {
    return (
        <Home />
    );
  }
});*/


// React router toimii tässä. Profile polku ei toimi vielä linkkinä jostain syystä.
var App = React.createClass({
  render: function () {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Login} />
          <Route path="registeration" component={Registeration}></Route>
        
          <Route path="home" component={Home}>
            <Route path="profile" component={Profile}></Route>
          </Route>
      </Router>
    );
  }
});

// Exporttaa tällä sivulla luodun komponentin
export default App;
