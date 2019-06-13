import React from 'react';
import ScoreIndex from './score_index';


const Home = ({ scores, fetchScores, fetchScore, destroyScore }) => (
	<div className="user-pane">
		<div className="previous-scores-list">
			<ScoreIndex 
				scores={scores} 
				fetchScores={fetchScores} 
				fetchScore={fetchScore} 
				destroyScore={destroyScore}
			/>
		</div>
	</div>
);

export default Home;

