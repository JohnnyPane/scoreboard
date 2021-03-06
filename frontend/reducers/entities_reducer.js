import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import scoresReducer from './scores_reducer';
import standingsReducer from './standings_reducer';
import opponentsReducer from './opponents_reducer';

export default combineReducers({
	users: usersReducer,
	scores: scoresReducer,
	standings: standingsReducer,
	opponents: opponentsReducer
});

