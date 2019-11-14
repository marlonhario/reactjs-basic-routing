import React from 'react';
import logo from './logo.svg';
import './App.css';

import Basicone from './components/Basicone';
import Basictwo from './components/Basictwo';
import Urlparameters from './components/Urlparameters';
import Redirectsauth from './components/Redirectsauth';
import Customlink from './components/Customlink';
import Preventingtransitions from './components/Preventingtransitions';
import Nomatch404 from './components/Nomatch404';
import Recursivepaths from './components/Recursivepaths';
import Sidebar from './components/Sidebar';
import Ambigousmatch from './components/Ambigousmatch';
import Routeconfig from './components/Routeconfig';
import Staticroute from './components/Staticroute';
import Queryparam from './components/Queryparam';
import Nestedroute from './components/Nestedroute';
import Ftob_1 from './components_ftb/Ftob_1';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <nav className="header_container">
            <ul>
              <Link to="/sample_1/"> sample 1</Link>
              <Link to="/sample_2/"> sample 2</Link>
              <Link to="/urlparameters/"> URL Prameters</Link>
              <Link to="/redirectsauth/"> Redirects (Auth)</Link>
              <Link to="/customlink/"> Custom Link</Link>
              <Link to="/preventingtransitions/"> Preventing Transitions</Link>
              <Link to="/nomatch404/"> No Match (404)</Link>
              <Link to="/sidebar/"> Sidebar </Link>
              <Link to="/ambigousmatch/"> Ambiguous Matches </Link>
              <Link to="/routeconfig/"> Route Config </Link>
              <Link to="/staticroute/"> StaticRouter Context </Link>
              <Link to="/queryparam/"> Query Parameters </Link>
              <Link to="/nestedroute/"> Nested Context </Link>
              <Link to="/ftob_1/"> Front to back one </Link>
            </ul>
          </nav>
          
          <div className="body_container"> 
            <Route path="/sample_1/" component={Basicone} />
            <Route path="/sample_2/" component={Basictwo} />
            <Route path="/urlparameters/" component={Urlparameters} />
            <Route path="/redirectsauth/" component={Redirectsauth} />
            <Route path="/customlink/" component={Customlink} />
            <Route path="/preventingtransitions/" component={Preventingtransitions} />
            <Route path="/nomatch404/" component={Nomatch404} />
            <Route path="/sidebar/" component={Sidebar} />
            <Route path="/ambigousmatch/" component={Ambigousmatch} />
            <Route path="/routeconfig/" component={Routeconfig} />
            <Route path="/staticroute/" component={Staticroute} />
            <Route path="/queryparam/" component={Queryparam} />
            <Route path="/nestedroute/" component={Nestedroute} />
            <Route path="/ftob_1/" component={Ftob_1} />
          </div>
          
        </header>
      </div>
    </Router>
  );
}

export default App;
