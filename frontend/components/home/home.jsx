import React from 'react';
import MainScore from '../main_score/main_score';
import ScoreIndex from './score_index';


const Home = ({ scores, fetchScores, fetchScore }) => (
	<div className="user-pane">
		<div className="top-score">
			<h5>Game on!</h5>
			<MainScore 
				scores={scores}
				fetchScore={fetchScore}
				fetchScores={fetchScores} />
		</div>
		<div className="previous-scores-list">
			<ScoreIndex scores={scores} fetchScores={fetchScores} />
		</div>
	</div>
);

export default Home;