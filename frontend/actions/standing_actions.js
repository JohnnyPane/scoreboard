import * as APIUtil from '../util/standing_api_util';

export const RECEIVE_STANDINGS = 'RECEIVE_STANDINGS';
export const RECEIVE_STANDING = 'RECEIVE_STANDING';

export const receiveStandings = standings => ({
	type: RECEIVE_STANDINGS,
	standings
});

export const receiveStanding = standing => ({
	type: RECEIVE_STANDING,
	standing
});

export const createStanding = standing => dispatch => (
	APIUtil.createStanding(standing).then(standing => (
		dispatch(receiveStanding(standing))
	))	
);

export const fetchStandings = () => dispatch => (
	APIUtil.fetchStandings().then(standings => (
		dispatch(receiveStandings(standings))
	))
);

export const fetchStanding = id => dispatch => (
	APIUtil.fetchStanding(id).then(payload => (
		dispatch(receiveStanding(payload))
	))
); 
