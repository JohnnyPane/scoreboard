import { connect } from 'react-redux';
import { createScore, fetchScore } from '../../actions/score_actions';
import { fetchOtherUsers } from '../../actions/session_actions';

import ScoreForm from './score_form';

const mapStateToProps = state => ({
	player_one: state.entities.users[state.session.id].username,
	opponents: state.entities.opponents
});


const mapDispatchToProps = dispatch => ({
	createScore: score => dispatch(createScore(score)),
	fetchScore: id => dispatch(fetchScore(id)),
	fetchOtherUsers: () => dispatch(fetchOtherUsers())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoreForm);

