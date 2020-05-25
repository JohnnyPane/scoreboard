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
import BoardContainer from './board/board_container';
import StandingContainer from './standings/standings_container';
import TeamScoresContainer from './team_scores/team_score_container';

const App = () => (
	<div>
		<header>
			<h1>Office Scoreboard</h1>
			<GreetingContainer />
		</header>
		<Switch>
	  	<AuthRoute exact path="/login" component={LoginFormContainer} />
	  	<AuthRoute exact path="/signup" component={SignupFormContainer} />
	  	<ProtectedRoute path="/scores/new" component={ScoreFormContainer} />
	  	<ProtectedRoute path="/scores/:scoreId" component={BoardContainer} />
	  	<ProtectedRoute path="/standings" component={StandingContainer} />
	  	<ProtectedRoute exact path="/" component={HomeContainer} />
			<ProtectedRoute path="/teamscoreboard" component={TeamScoresContainer} />
	  </Switch>
	</div>
);

export default App;
