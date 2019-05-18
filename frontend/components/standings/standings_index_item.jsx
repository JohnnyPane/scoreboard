import React from 'react';
import Chart from '../chart/chart';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { game_type, player_one, player_two, stats, scores, date } = this.props.standing;
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
								<span>WinPercentage: {(stats.player_one_wins / stats.total_games).toFixed(3)}</span>
								<br />
								<span>Lifetime Points: {scores.player_one_total_points}</span>
								<br />
								<span>Score Differential: {scores.player_one_total_points - scores.player_two_total_points}</span>
								<br />
								<p>Avg. Point Differential: {((scores.player_one_total_points - scores.player_two_total_points) / stats.total_games).toFixed(3) }</p>
							</div>
							<hr />
							<div className="player-game-stats">
								<span>{player_two}</span>
								<br />
								<span>Wins: {stats.player_two_wins}</span>
								<br />					
								<span>Win Percentage: {(stats.player_two_wins / stats.total_games).toFixed(3) }</span>
								<br />					
								<span>Lifetime Points: {scores.player_two_total_points}</span>
								<br />
								<span>Score Differential: {scores.player_two_total_points - scores.player_one_total_points}</span>
								<br />
								<p>Avg. Point Differential: {((scores.player_two_total_points - scores.player_one_total_points) / stats.total_games).toFixed(3) }</p>
							</div>
						</div>
						<Chart 
							player_one={player_one}
							player_two={player_two}
							scores={scores}
							date={date}
							stats={stats}
							/>
					</div>
				</li>
			</div>
		)
	}
}

export default StandingItem;