import React from 'react';
import { Link } from 'react-router';
import PlayerScores from './player_scores';


class BoardItem extends React.Component {
	constructor(props) {
		super(props);

	}

render() {
		const { score, updateScore, scoreId, fetchScores } = this.props;
		if (this.props.score === undefined) {
			return <div>Is loading...</div>
		}

		return (
			<div>
				<div id="main-scoreboard" >
					<h3>{score.game_type.toUpperCase()}</h3>
					<br/>
					<PlayerScores 
						score={score} 
						updateScore={updateScore} 
						scoreId={scoreId}
						fetchScores={fetchScores}
					 />
					<div className="player-names">
						<h4>{score.player_one}</h4>
						<h4>{score.player_two}</h4>
					</div>
					<div className="final-scores">
						<span className="final-score">First to: {score.final_score}</span>
					</div>
				</div>
			</div>
		)
	}
};

export default BoardItem;
