import React from 'react';
import ScoreIndexItem from './score_index_item';

class ScoreIndex extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.fetchScores();
	}

	render() {
		const { scores, fetchScores } = this.props;
		return (
				<div>
					<h1>Click on a score to go to it's scoreboard</h1>
					<ul>
						{scores.map((score, i) => ( 
							<ScoreIndexItem
								key={score.id} 
								score={score}
								fetchScores={fetchScores}
								fetchScore={fetchScore} /> 
								)
							)
						}
					</ul>
				</div>
		);
	}
} 


export default ScoreIndex;

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
