import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Components/Login';
import Navigation from './Components/Navigation';

  // In order for this to work I need to import the functions from their component file


const root = ReactDOM.createRoot(document.getElementById('root'));  
  //  Here is the DOM id needed to render what I need
root.render(
  <React.StrictMode>
    <Navigation />
    <br></br>
    <Login />
  </React.StrictMode>
);

