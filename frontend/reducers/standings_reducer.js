import merge from 'lodash/merge';

import { RECEIVE_STANDINGS, RECEIVE_STANDING } from '../actions/standing_actions';

const standingsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_STANDINGS: 
			return action.standings;
		case RECEIVE_STANDING:
			const newStanding = { [action.score.id]: action.score };
			return merge({}, state, newStanding);
		default:
			return state;
	}
};

export default standingsReducer;