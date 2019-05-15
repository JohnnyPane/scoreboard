import React from 'react';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {game_type, player_one, player_two, stats, scores} = this.props.standing;
		return (
			<div className="standing-item-list">
				<li>
					<div className="whole-standings">
						<h4>{game_type}</h4>
						<div className="all-player-stats">
							<div className="player-game-stats">
								<span>{player_one}</span>
								<br />
								<span>Wins: {stats.player_one_wins}</span>
								<br/>
								<span>WinPercentage: {(stats.player_one_wins / stats.total_games) * 100}%</span>
								<br />
								<span>Lifetime Points: {scores.player_one_points}</span>
								<br />
								<span>Score Differential: {scores.player_one_points - scores.player_two_points}</span>
								<br />
								<p>Avg. Point Differential: {(scores.player_one_points - scores.player_two_points) / stats.total_games }</p>
							</div>
							<hr />
							<div className="player-game-stats">
								<span>{player_two}</span>
								<br />
								<span>Wins: {stats.player_two_wins}</span>
								<br />					
								<span>Win Percentage: {(stats.player_two_wins / stats.total_games) * 100}%</span>
								<br />					
								<span>Lifetime Points: {scores.player_two_points}</span>
								<br />
								<span>Score Differential: {scores.player_two_points - scores.player_one_points}</span>
								<br />
								<p>Avg. Point Differential: {(scores.player_two_points - scores.player_one_points) / stats.total_games }</p>
							</div>
						</div>
						
					</div>
				</li>
			</div>
		)
	}
}

export default StandingItem;