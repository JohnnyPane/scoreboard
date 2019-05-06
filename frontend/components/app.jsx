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
import MainScoreContainer from './main_score/main_score_container';
import BoardContainer from './board/board_container';
import StandingContainer from './standings/standings_container';

const App = () => (
	<div>
		<header>
			<h1>NO COLLUSION!!!!!!!!!!</h1>
			<GreetingContainer />
		</header>
		<Switch>
	  	<AuthRoute exact path="/login" component={LoginFormContainer} />
	  	<AuthRoute exact path="/signup" component={SignupFormContainer} />
	  	<ProtectedRoute path="/scores/new" component={ScoreFormContainer} />
	  	<ProtectedRoute path="/scores/:scoreId" component={BoardContainer} />
	  	<ProtectedRoute exact path="/" component={HomeContainer} />
	  </Switch>
	  <StandingContainer />
	</div>
);

export default App;

// <ProtectedRoute path="/standings" component={StandingContainer} />