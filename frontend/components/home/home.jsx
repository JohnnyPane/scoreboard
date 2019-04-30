import React from 'react';
import MainScore from '../main_score/main_score';
import ScoreIndex from './score_index';


class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<section>
				<div className="scoreboarded">
					<ScoreIndex />
				</div>
			</section>
		);
	}
}

export default Home;