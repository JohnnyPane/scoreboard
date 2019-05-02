import { connect } from 'react-redux';
import { createScore, fetchScore } from '../../actions/score_actions';
import { selectScore } from '../../reducers/selectors'

import ScoreForm from './score_form';

const mapStateToProps = (state, { match }) => {
	const scoreId = parseInt(match.params.scoreId);
	const score = selectScore(state.entities, scoreId);
	return {
		scoreId,
		score
	};
};

const mapDispatchToProps = dispatch => ({
	createScore: score => dispatch(createScore(score)),
	fetchScore: id => dispatch(fetchScore(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoreForm);