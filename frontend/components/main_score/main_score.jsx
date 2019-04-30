import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import PlayerOneScore from './player1';
import PlayerTwoScore from './player2';

class MainScore extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { scores } = this.props;
		return (
			<div>
				<div id="main-scoreboard" >
					<h3>{scores.game_type}</h3>
					<br/>
					<PlayerOneScore />
					<PlayerTwoScore />
					<div className="player-names">
						<h4>{scores.player1}</h4>
						<h4>{scores.player2}</h4>
					</div>
					<span className="final-score">{scores.final_score}</span>
				</div>
			</div>
		)
	}
};

export default withRouter(MainScore);

