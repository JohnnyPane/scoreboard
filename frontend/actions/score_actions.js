import * as APIUtil from '../util/score_api_util';

export const RECEIVE_SCORES = 'RECEIVE_SCORES';

export const receiveScores = scores => ({
	type: RECEIVE_SCORES,
	scores
})

export const requestScores = () => dispatch => (
	APIUtil.fetchScores().then(scores => (
		dispatch(receiveScores(scores))
	))
);