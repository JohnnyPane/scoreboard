import React from 'react';
import { Link } from 'react-router';
import PlayerOneScore from './player1';
import PlayerTwoScore from './player2';

const BoardItem = ({ score }) => {
	return (
		<div>
			<div id="main-scoreboard" >
				<h3>{score.game_type.toUpperCase()}</h3>
				<br/>
				<PlayerOneScore score={score} />
				<PlayerTwoScore score={score} />
				<div className="player-names">
					<h4>{score.player_one}</h4>
					<h4>{score.player_two}</h4>
				</div>
				<span className="final-score">First to: {score.final_score}</span>
			</div>
		</div>
	)
};

export default BoardItem;