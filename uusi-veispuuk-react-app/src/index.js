import React from 'react';
import ReactDOM from 'react-dom';

// Sovelluksen komponentit
import App from './App';



// Renderoidaan App html sivulle (pitää muuttaa tuo router niin että se toimii kaikilla sivuilla)
ReactDOM.render((
  <App />
), document.getElementById('root'));

