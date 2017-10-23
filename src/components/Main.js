import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Grid from './Grid';
import Viewer from './Viewer';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Grid} />
    <Route path="/view/:chelaId" component={Viewer} />
  </Switch>
)

export default Main;