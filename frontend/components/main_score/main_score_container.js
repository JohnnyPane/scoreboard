import { connect } from 'react-redux';

import { fetchScore } from '../../actions/score_actions';
import { selectScore } from '../../reducers/selectors'
import MainScore from './main_score';

const mapStateToProps = state => {
	return {
		scores: state.entities.scores.id
	}
};

const mapDispatchToProps = dispatch => ({
	fetchScore: id => dispatch(fetchScore(id)),
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainScore);