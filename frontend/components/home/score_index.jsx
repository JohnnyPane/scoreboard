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
					<h1>Click on a score to go to it's scoreboard</h1>
					<h3>or click below to</h3>
					<div className="new-board-btn">
						<button onClick={this.handleClick}>Create Custom Scoreboard!</button>
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

// const ScoreIndex = ({ scores, fetchScores }) => (
// 	<div>
// 		<h1>Scores: </h1>
// 		{scores.map((score, i) => (
// 			<ScoreIndexItem
// 				score={score}
// 				key={i}
// 				fetchScores={fetchScores}
// 			/>
// 		))}
// 	</div>
// );

// export default ScoreIndex;
