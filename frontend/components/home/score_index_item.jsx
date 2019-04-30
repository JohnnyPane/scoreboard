import React from 'react';
import { withRouter } from 'react-router-dom';

class ScoreIndexItem extends React.Component {	
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const { game_type, player_one, player_two, final_score } = this.props.score;
		return (
			<li>
				<h4>Game Type: {game_type}</h4>
				<p>player one: {player_one}</p>
				<p>player two: {player_two}</p>
				<p>final score: {final_score}</p>
			</li>
		)
	}	
}

export default ScoreIndexItem;