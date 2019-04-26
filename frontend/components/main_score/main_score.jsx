import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import PlayerOneScore from './player1';
import PlayerTwoScore from './player2';

class MainScore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			game_type: 'VERY LEGAL, VERY COOL',
			player1: 'player1',
			player2: 'player2',
			final_score: 100
		}
	}

	render() {
		return (
			<div>
				<div id="main-scoreboard" >
					<h3>{this.state.game_type}</h3>
					<br/>
					<div className="player-names">
						<h4>{this.state.player1}</h4>
						<h4>{this.state.player2}</h4>
					</div>
					<PlayerOneScore />
					<PlayerTwoScore />
					
				</div>
			</div>
		)
	}
};

export default withRouter(MainScore);