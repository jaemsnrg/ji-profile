import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from '@pages/Home';

const PortalRouter = () =>
  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/"  component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default PortalRouter;
