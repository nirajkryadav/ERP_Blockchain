import React, { Component } from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
	combineReducers({
		routing: routerReducer,
	}),
	applyMiddleware(middleware)
);

import Root from './root';

export default class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Root />
				</ConnectedRouter>
			</Provider>
		)
	}
}