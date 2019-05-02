import React from 'react';
import { connect } from 'react-redux';
import ScoreIndex from './score_index';
import { fetchScores } from '../../actions/score_actions';
import { asArray } from '../../reducers/selectors';
import Home from './home';


const mapStateToProps = state => ({
	scores: Object.keys(state.entities.scores).map(key => state.entities.scores[key])
});

const mapDispatchToProps = (dispatch) => ({
	fetchScores: () => dispatch(fetchScores()),
	fetchScore: id => dispatch(fetchScore(id)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);