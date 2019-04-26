import { connect } from 'react-redux';

import { selectAllScores } from '../../reducers/selectors';
import Home from './score_index';
import { requestScores } from '../../actions/score_actions';

const mapStateToProps = state => ({
	scores: selectAllScores(state)
});

const mapDispatchToProps = dispatch => ({
	requestScores: () => dispatch(requestScores())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);