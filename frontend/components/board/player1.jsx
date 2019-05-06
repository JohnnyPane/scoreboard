import React from 'react';
import { withRouter } from 'react-router-dom';

class PlayerOneScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			count2: 0,
			gameOver: false
		};
		this.submitScore = this.submitScore.bind(this);
	}

	submitScore() {
		this.props.history.push('/');
	}

	render() {
		const score = this.state.count;
		const score2 = this.state.count2;
		const final = this.props.score.final_score;

		const overDisplay = () => (
			<div className="game-over">
				<h1>Game Over! {this.props.score.player_one} WINS!</h1>
				<button onClick={this.submitScore}>Submit Score to Standings</button>
			</div>
		);

		const overDisplay2 = () => (
			<div className="game-over">
				<h1>Game Over! {this.props.score.player_two} WINS!</h1>
				<button onClick={this.submitScore}>Submit Score to Standings</button>
			</div>
		)

		const boardDisplay = () => (
			<div className="score-wrapper">
				<div className="player-score">
					<h1 id="scorekeep">{this.state.count}</h1>
					<br/>
					<button onClick={() => this.setState({ count: this.state.count + 1})}>+1</button>
					<button onClick={() => this.setState({ count: this.state.count + 3})}>+3</button>
					<button onClick={() => this.setState({ count: this.state.count + 5})}>+5</button>
					<button onClick={() => this.setState({ count: this.state.count + 10})}>+10</button>
					<button onClick={() => this.setState({ count: this.state.count + 25})}>+25</button>
					<br/>
					<button onClick={() => this.setState({ count: this.state.count - 1})}>-1</button>
					<button onClick={() => this.setState({ count: this.state.count - 3})}>-3</button>
					<button onClick={() => this.setState({ count: this.state.count - 5})}>-5</button>
					<button onClick={() => this.setState({ count: this.state.count - 10})}>-10</button>
					<button onClick={() => this.setState({ count: this.state.count - 25})}>-25</button>
				</div>
				<div className="player-score">
					<h1 id="scorekeep">{this.state.count2}</h1>
					<br/>
					<button onClick={() => this.setState({ count2: this.state.count2 + 1})}>+1</button>
					<button onClick={() => this.setState({ count2: this.state.count2 + 3})}>+3</button>
					<button onClick={() => this.setState({ count2: this.state.count2 + 5})}>+5</button>
					<button onClick={() => this.setState({ count2: this.state.count2 + 10})}>+10</button>
					<button onClick={() => this.setState({ count2: this.state.count2 + 25})}>+25</button>
					<br/>
					<button onClick={() => this.setState({ count2: this.state.count2 - 1})}>-1</button>
					<button onClick={() => this.setState({ count2: this.state.count2 - 3})}>-3</button>
					<button onClick={() => this.setState({ count2: this.state.count2 - 5})}>-5</button>
					<button onClick={() => this.setState({ count2: this.state.count2 - 10})}>-10</button>
					<button onClick={() => this.setState({ count2: this.state.count2 - 25})}>-25</button>
				</div>
			</div>		
		);
		if (final <= score) {
			return overDisplay();
		} else if (final <= score2) {
			return overDisplay2();
		} else {
			return boardDisplay();
		}
	}
}

export default withRouter(PlayerOneScore);


// (final <= score || final <= score2) ? overDisplay() : boardDisplay();