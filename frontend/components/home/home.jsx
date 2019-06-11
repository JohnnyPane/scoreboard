import React from 'react';
import ScoreIndex from './score_index';


const Home = ({ scores, fetchScores, fetchScore }) => (
	<div className="user-pane">
		<div className="previous-scores-list">
			<ScoreIndex scores={scores} fetchScores={fetchScores} fetchScore={fetchScore} />
		</div>
	</div>
);

export default Home;

