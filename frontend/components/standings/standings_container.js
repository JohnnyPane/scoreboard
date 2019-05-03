import { connect } from 'react-redux';

import Standings from './standings';
import { createStanding,fetchStanding, fetchStandings } from '../../actions/standing_actions';
import { selectScore } from '../../reducers/selectors';


const mapDispatchToProps = dispatch => ({
	createStanding: standing => dispatch(createStanding(standing)),
	fetchStandings: standings => dispatch(fetchStandings(standings)),
	fetchStanding: standing => dispatch(fetchStanding(standing))
});

export default connect(
	null,
	mapDispatchToProps
)(Standings);