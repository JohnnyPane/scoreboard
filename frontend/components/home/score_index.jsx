import React from 'react';
import ScoreIndexItem from './score_index_item';
import { withRouter } from 'react-router-dom';

class ScoreIndex extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.props.fetchScores();
	}

	handleClick(e) {
		e.preventDefault();
		this.props.history.push('/scores/new');
	}

	render() {
		const { scores, destroyScore } = this.props;
		return (
				<div className="score-index">
					<h1>Click on a score to go to its scoreboard</h1>
					<h3>or click below to</h3>
					<div className="new-board-btn">
						<button onClick={this.handleClick}>Create a Custom Scoreboard!</button>
					</div>
					<ul className="score-index-list">
						{scores.reverse().map((score, i) => ( 
							<ScoreIndexItem
								key={i} 
								score={score}
								destroyScore={destroyScore}
							 /> 
								)
							)
						}
					</ul>
				</div>
		);
	}
} 


export default withRouter(ScoreIndex);

