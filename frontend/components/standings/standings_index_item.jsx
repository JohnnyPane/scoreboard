import React from 'react';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const {game_type, player_one, player_two, stats, scores} = this.props.standing;
		return (
			<div className="standing-item-list">
				<li>
				<div className="whole-standings">
					<h4>Game: {game_type}</h4>
						<div className="player-game-stats">
							<span>{player_one}</span>
							<br />
							<span>Wins: {stats.player_one_wins}</span>
							<br/>
							<span>Winning Percentage: {(stats.player_one_wins / stats.total_games) * 100}%</span>
							<br />
							<span>Lifetime Points: {scores.player_one_points}</span>
							<br />
							<span>Score Differential: {scores.player_one_points - scores.player_two_points}</span>
						</div>
						<div className="player-game-stats">
							<span>{player_two}</span>
							<br />
							<span>Wins: {stats.player_two_wins}</span>
							<br />					
							<span>Winning Percentage: {(stats.player_two_wins / stats.total_games) * 100}%</span>
							<br />					
							<span>Lifetime Points: {scores.player_two_points}</span>
							<br />
							<span>Score Differential: {scores.player_two_points - scores.player_one_points}</span>
						</div>
					</div>
				</li>
			</div>
		)
	}
}

export default StandingItem;