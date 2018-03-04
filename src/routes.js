import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './root_saga';
import reducers from './root_reducer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Home from './home/Home';
import Login from './login/login';
import Dummy from './dummy/Dummy';
import Route1 from './home/route1/route1';
import About from './about/About';

const routes = (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/about' component={About} />
        <Route exact path='/route1' component={Route1} />
      </Switch>
    </BrowserRouter>
);

export default routes;
