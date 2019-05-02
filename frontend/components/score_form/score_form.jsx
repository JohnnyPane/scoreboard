import React from 'react';
import { withRouter } from 'react-router';

class ScoreForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game_type: '',
			player_one: '',
			player_two: '',
			final_score: 25
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navigateToScoreboard = this.navigateToScoreboard.bind(this);
	}

	navigateToScoreboard() {
		this.props.history.push('/');
	}

	update(property) {
		return e => this.setState({
			[property]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData()
		formData.append('score[game_type]', this.state.game_type);
		formData.append('score[player_one]', this.state.player_one);
		formData.append('score[player_two]', this.state.player_two);
		formData.append('score[final_score]', this.state.final_score);
		this.props.createScore(formData).then(() => (
		this.navigateToScoreboard()))
	};

	render() {
		const { game_type, player_one, player_two, final_score } = this.state;

		return (
			<div className="new-score-container">
				<div className="new-score-form">
					<h3 className="new-score-title">Create a Scoreboard!</h3>

					<form onSubmit={this.handleSubmit}>
						<label className="score-field">Game Type: </label>
						<input
							type="text"
							value={game_type}
							onChange={this.update('game_type')}
							className="score-field"
						/>

						<label className="score-field">Player One: </label>
						<input
							type="text"
							value={player_one}
							onChange={this.update('player_one')}
							className="score-field"
						/>

						<label className="score-field">Player Two: </label>
						<input
							type="text"
							value={player_two}
							onChange={this.update('player_two')}
							className="score-field"
						/>

						<label className="score-field">Game up to: </label>
						<input
							type="text"
							value={final_score}
							onChange={this.update('final_score')}
							className="score-field"
						/>

						<hr />

						<div className="button-holder">
              <input
                type="submit"
                value="Create Score"
                className="new-score-button"
              />
            </div>
          </form>
        </div>
      </div>
		);
	}
}

export default withRouter(ScoreForm);





