import React from 'react';

const ScoreIndexItem = ({ scores }) => (
	<li className="score-index-item">
		<span>{score.game_type}</span>
		<span>{score.player_one}</span>
		<span>{score.player_two}</span>
	</li>
);

export default ScoreIndexItem;