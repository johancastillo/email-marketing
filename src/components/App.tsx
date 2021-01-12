import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Clients from '../pages/Clients';
//Page
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Providers from '../pages/Providers';

function App() {
  return (
    <>
      <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/providers">Providers</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route exact path="/providers" component={Providers} />
        <Route component={PageNotFound} />
      </Switch>

      </Router>
    </>
  );
}

export default App;
