import React from 'react';
import ReactDOM from 'react-dom/client';
import {app} from './firebase.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/index.css';
import App from './components/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

