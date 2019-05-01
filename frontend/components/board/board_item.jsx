import React from 'react';
import { Link } from 'react-router';
import PlayerOneScore from '../main_score/player1';
import PlayerTwoScore from '../main_score/player2';

const BoardItem = ({ score }) => {
	console.log(score)
	return (
		<div>
			<div id="main-scoreboard" >
				<h3>{score.game_type}</h3>
				<br/>
				<PlayerOneScore />
				<PlayerTwoScore />
				<div className="player-names">
					<h4>{score.player_one}</h4>
					<h4>{score.player_two}</h4>
				</div>
				<span className="final-score">{score.final_score}</span>
			</div>
		</div>
	)
};

export default BoardItem;