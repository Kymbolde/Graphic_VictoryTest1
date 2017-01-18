import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Live from './Live';
import interactive from './interactive';
import settings from './settings';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Live}/>
      <Route path="interactive" component={interactive} />
      <Route path="settings" component={settings} />
    </Route>
  </Router>,



  document.getElementById('root')
);
