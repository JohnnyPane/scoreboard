import merge from 'lodash/merge';

import { 
	RECEIVE_SCORES,
	RECEIVE_SCORE
} from '../actions/score_actions';

const scoresReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_SCORES:
			return action.scores;
		case RECEIVE_SCORE:
			const newScore = { [action.score.id]: action.score }
			return merge({}, state, newScore);
		default:
			return state;
	}
};

export default scoresReducer;