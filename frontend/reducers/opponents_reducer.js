import merge from 'lodash/merge';

import { RECEIVE_OTHER_USERS } from  '../actions/session_actions';

const opponentsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_OTHER_USERS:
			return action.users;
		default:
			return state;
	}
};

export default opponentsReducer;

