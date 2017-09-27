import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Route , Switch} from 'react-router-dom';
import {IndexRoute, hashHistory} from 'react-router-history';
import index from './index';

const Routes = () => {
  return (
    <HashRouter>
      <Switch >
        <Route exact path="/" component={index}  />
        {/* <Route path="/game" component={Game} />  */}
      </Switch>
    </HashRouter>
  );
}

export default Routes;