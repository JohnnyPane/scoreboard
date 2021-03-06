import * as APIUtil from '../util/score_api_util';

export const RECEIVE_SCORES = 'RECEIVE_SCORES';
export const RECEIVE_SCORE = 'RECEIVE_SCORE';
export const REMOVE_SCORE = 'REMOVE_SCORE';

export const receiveScores = scores => ({
	type: RECEIVE_SCORES,
	scores
});

export const receiveScore = score => ({
	type: RECEIVE_SCORE,
	score
});

export const removeScore = score => ({
	type: REMOVE_SCORE,
	score
});

export const createScore = score => dispatch => (
	APIUtil.createScore(score).then(score => (
		dispatch(receiveScore(score))
	))
);

export const updateScore = score => dispatch => (
	APIUtil.updateScore(score).then(score => (
		dispatch(receiveScore(score))
	))
);

export const fetchScore = id => dispatch => (
	APIUtil.fetchScore(id).then(payload => (
		dispatch(receiveScore(payload))
	))
);

export const fetchScores = () => dispatch => (
	APIUtil.fetchScores().then(scores => (
		dispatch(receiveScores(scores))
	))
);

export const deleteScore = id => dispatch => (
	APIUtil.destroyScore(id).then(score => dispatch(removeScore(score)))
);
