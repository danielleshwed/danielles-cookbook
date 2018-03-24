import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';

import dashboardReducer from './Components/Dashboard/reducers';
import recipeReducer from './Components/RecipeCard/reducers';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router';

import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home'
import Details from './Components/Details/Details'

const rootReducer = combineReducers({
  dashboardReducer,
  recipeReducer,
  router: routerReducer
});

const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history)
const store = createStore(rootReducer, applyMiddleware(reactRouterMiddleware));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Dashboard} />
          <Route exact path='/details' component={Details} />
        </div>
      </Router>
      </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
