import React from 'react';
import ScoreIndexItem from './score_index_item';

class ScoreIndex extends React.Component {

	componentDidMount() {
		this.props.fetchScores();
	}

	render() {
		const { scores } = this.props;
		return (
				<div>
					<h1>Scores:</h1>
					<ul>
						{scores.map((score, i) => ( 
							console.log(score),
							<ScoreIndexItem
								key={i} 
								score={score} /> 
								)
							)
						}
					</ul>
				</div>
		);
	}
} 


export default ScoreIndex;

