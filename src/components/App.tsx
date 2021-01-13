import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Clients from '../pages/Clients';
//Page
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Providers from '../pages/Providers';

function App() {
  return (
    <>
      <Router>


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
