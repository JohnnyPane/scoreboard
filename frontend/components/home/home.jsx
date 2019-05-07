import React from 'react';
import MainScore from '../main_score/main_score';
import ScoreIndex from './score_index';


const Home = ({ scores, fetchScores, fetchScore }) => (
	<div className="user-pane">
		<div className="previous-scores-list">
			<ScoreIndex scores={scores} fetchScores={fetchScores} />
		</div>
	</div>
);

export default Home;

