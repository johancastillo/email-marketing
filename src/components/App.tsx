import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Clients from '../pages/Clients';
//Page
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import Providers from '../pages/Providers';
import Menu from './Menu';

function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Menu />

            <div className="col-md-11">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clients" component={Clients} />
                <Route exact path="/providers" component={Providers} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </div>

      </Router>
    </>
  );
}

export default App;
