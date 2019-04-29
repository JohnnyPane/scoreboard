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
import HomeContainer from './home/home_container';
import ScoreFormContainer from './score_form/score_form_container';
import MainScore from './main_score/main_score';

const App = () => (
	<div>
		<header>
			<h1>NO COLLUSION!!</h1>
			<GreetingContainer />
		</header>

  	<AuthRoute exact path="/login" component={LoginFormContainer} />
  	<AuthRoute exact path="/signup" component={SignupFormContainer} />
  	<Route exact path="/scores/new" component={ScoreFormContainer} />
  	<ProtectedRoute exact path="/" component={ScoreFormContainer} />
	</div>
);

export default App;