import React from 'react';
import { Link } from 'react-router';
import PlayerScores from './player_scores';


const BoardItem = ({ score, fetchStandings, standings }) => {
	return (
		<div>
			<div id="main-scoreboard" >
				<h3>{score.game_type.toUpperCase()}</h3>
				<br/>
				<PlayerScores score={score} fetchStandings={fetchStandings} standings={standings} />
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