import { connect } from 'react-redux';

import Standings from './standings';
import { fetchScores} from '../../actions/score_actions';
import { fetchStandings } from '../../actions/standing_actions';

const mapStateToProps = state => ({
	standings: Object.keys(state.entities.standings).map(key => state.entities.standings[key])
});


const mapDispatchToProps = dispatch => ({
	fetchScores: () => dispatch(fetchScores()),
	fetchStandings: () => dispatch(fetchStandings())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Standings);