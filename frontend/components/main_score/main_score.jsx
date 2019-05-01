import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import PlayerOneScore from './player1';
import PlayerTwoScore from './player2';

class MainScore extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.props.history.push('/scores/new');
	}

	render() {
		const { scores } = this.props;
		return (
			<div>
				<div className="new-board-btn">
					<button onClick={this.handleClick}>Create Custom Scoreboard!</button>
				</div>
				<div id="main-scoreboard" >
					<h3>Quick Game!</h3>
					<br/>
					<PlayerOneScore />
					<PlayerTwoScore />
					<div className="player-names">
						<h4>Player One</h4>
						<h4>Player Two</h4>
					</div>
					<span className="final-score">{scores.final_score}</span>
				</div>
			</div>
		)
	}
};

export default withRouter(MainScore);

