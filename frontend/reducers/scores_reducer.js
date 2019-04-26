import merge from 'lodash/merge';

import { RECEIVE_SCORES } from '../actions/score_actions';

const scoresReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_SCORES:
			return action.scores;
		default:
			return state;
	}
};

export default scoresReducer;