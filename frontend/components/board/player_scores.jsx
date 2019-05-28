import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PlayerScores extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.score.player_one_score,
			count2: this.props.score.player_two_score,
		};
		this.submitScore = this.submitScore.bind(this);
		this.addScores = this.addScores.bind(this);
	}

	submitScore() {
		this.props.history.push('/standings');
	}

	addScores(e) {
		e.preventDefault();
		const plyr1 = this.state.count;
		const plyr2 = this.state.count2;
		const newScores = merge({}, this.props.score, {
			player_one_score: plyr1,
			player_two_score: plyr2
		});
		this.props.updateScore(newScores);
		this.submitScore();
	}

	render() {
		const player_one_score = this.state.count;
		const player_two_score = this.state.count2;
		const final = this.props.score.final_score;

		const overDisplay = () => (
			<div className="game-over">
				<h1>Game Over! {this.props.score.player_one} WINS!</h1>
				<button onClick={this.addScores}>Submit Score to Standings</button>
			</div>
		);

		const overDisplay2 = () => (
			<div className="game-over">
				<h1>Game Over! {this.props.score.player_two} WINS!</h1>
				<button onClick={this.addScores}>Submit Score to Standings</button>
			</div>
		)

		const boardDisplay = () => (
			<div className="score-wrapper">
				<div className="player-score">
					<h1 id="scorekeep">{player_one_score}</h1>
					<br/>
					<button onClick={() => this.setState({ count: player_one_score + 1})}>+1</button>
					<button onClick={() => this.setState({ count: player_one_score + 3})}>+3</button>
					<button onClick={() => this.setState({ count: player_one_score + 5})}>+5</button>
					<button onClick={() => this.setState({ count: player_one_score + 10})}>+10</button>
					<button onClick={() => this.setState({ count: player_one_score + 25})}>+25</button>
					<br/>
					<button onClick={() => this.setState({ count: player_one_score - 1})}>-1</button>
					<button onClick={() => this.setState({ count: player_one_score - 3})}>-3</button>
					<button onClick={() => this.setState({ count: player_one_score - 5})}>-5</button>
					<button onClick={() => this.setState({ count: player_one_score - 10})}>-10</button>
					<button onClick={() => this.setState({ count: player_one_score - 25})}>-25</button>
				</div>
				<div className="player-score">
					<h1 id="scorekeep">{player_two_score}</h1>
					<br/>
					<button onClick={() => this.setState({ count2: player_two_score + 1})}>+1</button>
					<button onClick={() => this.setState({ count2: player_two_score + 3})}>+3</button>
					<button onClick={() => this.setState({ count2: player_two_score + 5})}>+5</button>
					<button onClick={() => this.setState({ count2: player_two_score + 10})}>+10</button>
					<button onClick={() => this.setState({ count2: player_two_score + 25})}>+25</button>
					<br/>
					<button onClick={() => this.setState({ count2: player_two_score - 1})}>-1</button>
					<button onClick={() => this.setState({ count2: player_two_score - 3})}>-3</button>
					<button onClick={() => this.setState({ count2: player_two_score - 5})}>-5</button>
					<button onClick={() => this.setState({ count2: player_two_score - 10})}>-10</button>
					<button onClick={() => this.setState({ count2: player_two_score - 25})}>-25</button>
				</div>
			</div>		
		);
		if (final <= player_one_score) {
			return overDisplay();
		} else if (final <= player_two_score) {
			return overDisplay2();
		} else {
			return boardDisplay();
		}
	}
}

export default withRouter(PlayerScores);




