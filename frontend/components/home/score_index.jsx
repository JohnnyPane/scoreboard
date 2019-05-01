import React from 'react';
import ScoreIndexItem from './score_index_item';


const ScoreIndex = ({ scores, fetchScores }) => (
	<div>
		<h1>Scores: </h1>
		{scores.map(score => (
			<ScoreIndexItem
				score={score}
				key={score.id}
				fetchScores={fetchScores}
			/>
		))}
	</div>
);

export default ScoreIndex;




// class ScoreIndex extends React.Component {

// 	componentDidMount() {
// 		this.props.fetchScores();
// 	}

// 	render() {
// 		const { scores } = this.props;
// 		return (
// 				<div>
// 					<h1>Scores:</h1>
// 					<ul>
// 						{scores.map((score, i) => ( 
// 							<ScoreIndexItem
// 								key={score.id} 
// 								score={score} /> 
// 								)
// 							)
// 						}
// 					</ul>
// 				</div>
// 		);
// 	}
// } 


// export default ScoreIndex;

