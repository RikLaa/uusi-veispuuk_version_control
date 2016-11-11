/*------------------------------LUE TÄMÄ--------------------------------  */
/*------------------------------!!!!!!!!--------------------------------  */
/* Kun importtaat komponentteja käytä alla olevaa syntaksia. Eli (import "komponentti" from "kirjasto").
HUOM !!! react-router kirjastosta importtaessa katso alla oleva sääntö.
ps. jQueryn importtaaminen = import $ from 'jquery'
*/

// Reactin kirjastot
import React from 'react';
// jos importtaat router kirjastosta käytä alla olevaa syntaksia. Jostain syystä esim "import Link from 'react-router' ei toiminut oikein
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';


// Sovelluksen komponentit, eli näkymät
import Home from './scene/Home/Home.jsx';
import Container from './scene/Home/Container.jsx';
import Profile from './scene//Profile/Profile.jsx';
import FAQ from './scene/Home/FAQ.jsx';
import Login from './scene/Login/Login.jsx';
import Registeration from './scene/Registeration/Registeration.jsx'

// css. App.css tulee bootstrapin jälkeen joten siinä tehdyt muutokset yliajavat kaikki muut
import 'bootstrap/dist/css/bootstrap.min.css';
// Tehdäänkö yksi yleinen css tiedosto vai tehdäänkö aina komponenteille omat?
import './App.css';


/*--------------TESTAUKSEEN NOPEASTI ( ei tarvita periaatteessa enään )-----------------*/ 
/* POISTA TÄSTÄ ALHAALTA KOMMENTIT NIIN ONNISTUU TESTAUS ILMAN ROUTERIA 
MUISTA KOMMENTOIDA TUO ALEMPI ROUTER KOMPONENTTI SILLOIN POIS */

/*var App = React.createClass({
  render: function () {
    return (
        <Home />
    );
  }
});*/

/*---------------------------------------------------*/


// React router toimii tässä. Profile polku ei toimi vielä linkkinä jostain syystä.
// Jos haluat editoida esim registeration -sivua, niin kirjoitaaa selaimeen osoiteriville  "localhost:3000/registeration", tällöin näät kyseisen sivun
var App = React.createClass({
  render: function () {
    return (
        <Router history={hashHistory}>
          <Route path="/" component={Login} />
          <Route path="registeration" component={Registeration}></Route>
          <Route path="home" component={Home}>
            <IndexRedirect to="/home/main"></IndexRedirect>
            <Route path="main" component={Container}></Route>
            <Route path="profile" component={Profile}></Route>
            <Route path="FAQ" component={FAQ}></Route>
          </Route>
      </Router>
    );
  }
});



// Exporttaa tällä sivulla luodun komponentin. Käytetään tätä syntaksia exportatessa.
export default App;
