import { connect } from 'react-redux';

import { fetchScore } from '../../actions/score_actions';
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
	fetchScore: id => dispatch(fetchScore(id)),
	fetchStandings: () => dispatch(fetchStandings())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);