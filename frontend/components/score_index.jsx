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
			<section className="scores">
				<ul>
					{scores.map(score => <ScoreIndexItem key={score.id} scores={score} />)}
				</ul>
			</section>
		);
	}
} 

export default ScoreIndex;