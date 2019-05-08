import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PlayerScores extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.score.player_one_score,
			count2: this.props.score.player_two_score
		};
		this.submitScore = this.submitScore.bind(this);
		this.addScores = this.addScores.bind(this);
	}

	submitScore() {
		this.props.history.push('/');
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
		const score = this.state.count;
		const score2 = this.state.count2;
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

export default withRouter(PlayerScores);

// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class PlayerScores extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0,
// 			count2: 0
// 		};
// 		this.submitScore = this.submitScore.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleSubmit(e) {
// 		e.preventDefault();
// 		console.log(this.props.score);
// 		const scoreUp = this.props.score
// 		const formData = new FormData()
// 		formData.append('score[player_one_score]', this.state.count);
// 		formData.append('score[player_two_score]', this.state.count2);
// 		this.props.updateScore(scoreUp).then(() => (
// 		this.submitScore()))
// 	};

// 	submitScore() {
// 		this.props.history.push('/');
// 	}

// 	render() {
// 		const score = this.state.count;
// 		const score2 = this.state.count2;
// 		const final = this.props.score.final_score;

// 		const overDisplay = () => (
// 			<div className="game-over">
// 				<h1>Game Over! {this.props.score.player_one} WINS!</h1>
// 				<button onClick={this.submitScore}>Submit Score to Standings</button>
// 				<form onSubmit={this.handleSubmit}>
// 					<label className="score-field">{this.props.score.player_one} final score: </label>
// 					<input 
// 						type="number"
// 						value={score}
// 						className="player-score-submit"
// 						readOnly
// 					/>

// 					<label className="score-field">{this.props.score.player_two} final score: </label>
// 					<input 
// 						type="number"
// 						value={score2}
// 						className="player-score-submit"
// 						readOnly
// 					/>

// 					<div className="button-holder">
//             <input
//               type="submit"
//               value="Finish Score"
//               className="new-score-button"
//             />
//           </div>
// 				</form>
// 			</div>
// 		);

// 		const overDisplay2 = () => (
// 			<div className="game-over">
// 				<h1>Game Over! {this.props.score.player_two} WINS!</h1>
// 				<button onClick={this.submitScore}>Submit Score to Standings</button>
// 				<form onSubmit={this.handleSubmit}>
// 					<label className="score-field">{this.props.sore.player_one} final score: </label>
// 					<input 
// 						type="number"
// 						value={score}
// 						className="player-score-submit"
// 						readOnly
// 					/>

// 					<label className="score-field">{this.props.score.player_two} final score: </label>
// 					<input 
// 						type="number"
// 						value={score2}
// 						className="player-score-submit"
// 						readOnly
// 					/>

// 					<div className="button-holder">
//             <input
//               type="submit"
//               value="Finish Score"
//               className="new-score-button"
//             />
//           </div>
// 				</form>
// 			</div>
// 		)

// 		const boardDisplay = () => (
// 			<div className="score-wrapper">
// 				<div className="player-score">
// 					<h1 id="scorekeep">{this.state.count}</h1>
// 					<br/>
// 					<button onClick={() => this.setState({ count: this.state.count + 1})}>+1</button>
// 					<button onClick={() => this.setState({ count: this.state.count + 3})}>+3</button>
// 					<button onClick={() => this.setState({ count: this.state.count + 5})}>+5</button>
// 					<button onClick={() => this.setState({ count: this.state.count + 10})}>+10</button>
// 					<button onClick={() => this.setState({ count: this.state.count + 25})}>+25</button>
// 					<br/>
// 					<button onClick={() => this.setState({ count: this.state.count - 1})}>-1</button>
// 					<button onClick={() => this.setState({ count: this.state.count - 3})}>-3</button>
// 					<button onClick={() => this.setState({ count: this.state.count - 5})}>-5</button>
// 					<button onClick={() => this.setState({ count: this.state.count - 10})}>-10</button>
// 					<button onClick={() => this.setState({ count: this.state.count - 25})}>-25</button>
// 				</div>
// 				<div className="player-score">
// 					<h1 id="scorekeep">{this.state.count2}</h1>
// 					<br/>
// 					<button onClick={() => this.setState({ count2: this.state.count2 + 1})}>+1</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 + 3})}>+3</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 + 5})}>+5</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 + 10})}>+10</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 + 25})}>+25</button>
// 					<br/>
// 					<button onClick={() => this.setState({ count2: this.state.count2 - 1})}>-1</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 - 3})}>-3</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 - 5})}>-5</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 - 10})}>-10</button>
// 					<button onClick={() => this.setState({ count2: this.state.count2 - 25})}>-25</button>
// 				</div>
// 			</div>		
// 		);
// 		if (final <= score) {
// 			return overDisplay();
// 		} else if (final <= score2) {
// 			return overDisplay2();
// 		} else {
// 			return boardDisplay();
// 		}
// 	}
// }

// export default withRouter(PlayerScores);