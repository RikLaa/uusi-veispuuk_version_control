import React, { Component } from 'react';


// Sovelluksen komponentit
import Home from './scene/Home/Home.jsx';
import Login from './scene/Login/Login.jsx';
import Registration from './scene/Registration/Registration.jsx'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Tähän App-komponenttiin voi aluksi tuoda muita komponentteja joita haluaa renderöitävän
// Container-fluid määritys mahdollistaa esim navbarille toimimisen koko sivun leveydelle.
// Muut komponentit voidaan sitoa "container" luokan sisälle. Mutta tehdään se itse komponentin omassa tiedostossa, 
// ei tässä
var App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <Home />
        
        
     </div>
    );
  }
});

// Exporttaa tällä sivulla luodun komponentin
export default App;
