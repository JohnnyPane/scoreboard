import { connect } from 'react-redux';

import { fetchScore } from '../../actions/score_actions';
import { selectScore } from '../../reducers/selectors';
import Board from './board';

const mapStateToProps = (state, { match }) => {
	const scoreId = parseInt(match.params.scoreId);
	const score = selectScore(state.entities, scoreId);
	return {
		scoreId,
		score
	};
};

const mapDispatchToProps = dispatch => ({
	fetchScore: id => dispatch(fetchScore(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);