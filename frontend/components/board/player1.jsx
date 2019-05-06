import React from 'react';
import { withRouter } from 'react-router-dom';

class PlayerOneScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			gameOver: false
		};
		this.submitScore = this.submitScore.bind(this);
	}

	submitScore() {
		this.props.history.push('/');
	}

	componentDidMount() {
		console.log(this.state);
		console.log(this.props);
	}

	componentDidUpdate() {
		const count = this.state.count;
		const final = this.props.score.final_score;
		const player = this.props.score.player_one;
		if (count >= final) {
			alert(`${player} WINS!`);
		}
	}

	render() {
		const score = this.state.count;
		const final = this.props.score.final_score;

		const overDisplay = () => (
			<div className="game-over">
				<h3>Game Over! {this.props.score.player_one} WINS!</h3>
				<button onClick={this.submitScore}>Submit Score to Standings</button>
			</div>
		);

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
			</div>		
		);
		return final <= score ? overDisplay() : boardDisplay();
	}
}

export default withRouter(PlayerOneScore);