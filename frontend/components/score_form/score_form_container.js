import { connect } from 'react-redux';
import { createScore, fetchScore } from '../../actions/score_actions';
import { fetchOtherUsers } from '../../actions/session_actions';

import ScoreForm from './score_form';

const mapStateToProps = state => ({
	player_one: state.entities.users[state.session.id].username,
	opponents: Object.keys(state.entities.opponents).map(key => state.entities.opponents[key])
});


const mapDispatchToProps = (dispatch) => ({
	fetchOtherUsers: () => dispatch(fetchOtherUsers()),
	createScore: score => dispatch(createScore(score)),
	fetchScore: id => dispatch(fetchScore(id)),
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoreForm);

