import React from 'react';
import {
	Route,
	Redirect,
	Switch,
	Link,
	HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ScoreIndexContainer from './score_index_container';

const App = () => (
	<div>
		<header>
			<h1>NO COLLUSION!!</h1>
			<GreetingContainer />
		</header>

  	<AuthRoute exact path="/login" component={LoginFormContainer} />
  	<AuthRoute exact path="/signup" component={SignupFormContainer} />
  	<Route exact path="/" component={ScoreIndexContainer} />
	</div>
);

export default App;