import React from 'react';
import Chart from '../chart/chart';
import { withRouter } from 'react-router';

class StandingItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navigateToScoreboard = this.navigateToScoreboard.bind(this);
	}

	navigateToScoreboard() {
		this.props.history.push('/');
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('score[game_type]', this.props.standing.game_type);
		formData.append('score[player_one]', this.props.standing.player_one);
		formData.append('score[player_two]', this.props.standing.player_two);
		formData.append('score[final_score]', this.props.standing.date[0].final_score);
		this.props.createScore(formData).then(() => (
			this.navigateToScoreboard()))
	};

	update(property) {
		return e => this.setState({
			[property]: e.target.value
		});
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
						<form onSubmit={this.handleSubmit}>
							<div className="button-holder">
		            <input
		              type="submit"
		              value="Create Quick Score"
		              className="quick-score-button"
		            />
		          </div>
						</form>
					</div>
				</li>
			</div>
		)
	}
}

export default withRouter(StandingItem);