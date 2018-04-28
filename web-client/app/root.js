import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './pages/loginPage';
import DashboardPage from './pages/dashboardPage';
import NotFoundPage from './pages/notFoundPage';

export default class Root extends Component {
	render () {
		return (
			<Switch>
				<Route path="/login" component={LoginPage} />
				<Route path="/dashboard" component={DashboardPage} />
				<Route component={NotFoundPage} />
			</Switch>
		)
	}
}