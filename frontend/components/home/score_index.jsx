import React from 'react';
import { Route } from 'react-router-dom';

import ScoreIndexItem from './score_index_item';

class ScoreIndex extends React.Component {
	componentDidMount() {
		this.props.requestScores();
	}

	render() {
		const { scores } = this.props;

		return (
				<div>
					<h1>Scores:</h1>
					<ul>
						{scores.map(bench => ( <ScoreIndexItem score={score} key={score.id} /> ))}
					</ul>
				</div>
		);
	}
} 

export default ScoreIndex;