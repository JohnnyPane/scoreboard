import React from 'react';
import { withRouter } from 'react-router-dom';
 
const ScoreIndexItem = ({ scores }) => (
	<li className="score-index-item">
		<span>{scores.game_type}</span>
		<span>{scores.player_one}</span>
		<span>{scores.player_two}</span>
	</li>
);

export default withRouter(ScoreIndexItem);