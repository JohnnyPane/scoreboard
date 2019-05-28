import { connect } from 'react-redux';

import { fetchScore, updateScore, fetchScores } from '../../actions/score_actions';
import { fetchStandings } from '../../actions/standing_actions';
import { selectScore } from '../../reducers/selectors';
import Board from './board';

const mapStateToProps = (state, { match }) => {
	const scoreId = parseInt(match.params.scoreId);
	const score = selectScore(state.entities, scoreId);
	return {
		scoreId: scoreId,
		score: score,
		standings: Object.keys(state.entities.standings).map(key => state.entities.standings[key])
	};
};

const mapDispatchToProps = dispatch => ({
	fetchScores: () => dispatch(fetchScores()),
	fetchStandings: () => dispatch(fetchStandings()),
	updateScore: score => dispatch(updateScore(score)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);