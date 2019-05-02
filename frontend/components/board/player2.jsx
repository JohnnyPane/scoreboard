import React from 'react';

class PlayerTwoScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		console.log(this.props);
	}

	componentDidUpdate() {
		const count = this.state.count;
		const final = this.props.score.final_score;
		const player = this.props.score.player_two;
		if (count >= final) {
			alert(`${player} WINS!`);
		}
	}

	render() {
		return (
			<div className="score-wrapper">
				<div className="player-score">
					<h1>{this.state.count}</h1>
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
	}
}

export default PlayerTwoScore;