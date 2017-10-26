import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Grid from './Grid';
import Viewer from './Viewer';
import NoMatch from './NoMatch';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Grid} />
    <Route path="/view/:chelaId" component={Viewer} />
    <Route component={NoMatch} />
  </Switch>
)

export default Main;