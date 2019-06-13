import React from 'react';
import { withRouter } from 'react-router-dom';

class ScoreIndexItem extends React.Component {	
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
  	e.stopPropagation();
  	const scoreId = this.props.score.id;
  	this.props.destroyScore(scoreId);
  }

  handleClick() {
    const scoreId = this.props.score.id;
    this.props.history.push(`/scores/${scoreId}`);
  }



	render() {
		const { game_type, player_one, player_two, final_score, player_one_score, player_two_score } = this.props.score;
		return (
			<div className="score-index-item"
					 onClick={this.handleClick} >
				<li>
					<h4>Game Type: {game_type}</h4>
					<p>{player_one} vs. {player_two}</p>
					<p>{player_one}: {player_one_score}</p>
					<p>{player_two}: {player_two_score}</p>
					<p>final score: {final_score}</p>
				</li>
				<div className="delete-button-wrapper">
					<button className="delete-button" onClick={ this.handleDelete }>
	          Delete Score
	        </button>
        </div>
			</div>
		)
	}	
}

export default withRouter(ScoreIndexItem);