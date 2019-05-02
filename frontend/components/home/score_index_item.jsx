import React from 'react';
import { withRouter } from 'react-router-dom';

class ScoreIndexItem extends React.Component {	
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const scoreId = this.props.score.id;
    this.props.history.push(`/scores/${scoreId}`);
  }

	render() {
		const { game_type, player_one, player_two, final_score } = this.props.score;
		return (
			<div className="score-index-item"
					 onClick={this.handleClick} >
				<li>
					<h4>Game Type: {game_type}</h4>
					<p>player one: {player_one}</p>
					<p>player two: {player_two}</p>
					<p>final score: {final_score}</p>
				</li>
			</div>
		)
	}	
}

export default withRouter(ScoreIndexItem);