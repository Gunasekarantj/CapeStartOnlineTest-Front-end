import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/Employee">Employee Management</Link>
        </li>
        <li>
          <Link to="/Company">Company Management</Link>
        </li>
        
      </ul>
      <Route exact path="/Employee" component={App} />
     
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


