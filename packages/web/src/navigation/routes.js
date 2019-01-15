import React from 'react';
import { Route } from 'react-router';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const routes = () => (
	<React.Fragment>
		<Route exact path='/' component={HomeScreen} />
		<Route path='/profile' component={ProfileScreen} />
	</React.Fragment>
);

export default routes;
